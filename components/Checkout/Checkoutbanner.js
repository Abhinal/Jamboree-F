import Bookingdetails from "./Bookingdetails";
import CancelPopup from "./CancelPopup";
import styles from "../../styles/Checkout/Checkoutbanner.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Checkoutbanner() {
  const router = useRouter();
  const lastOrder = useSelector((state) => state.jamboree.lastOrder);

  const data = lastOrder.data;
  const order_id = lastOrder.order_id;
  const dateForm = lastOrder.date;
  const timeForm = lastOrder.time;

  return (
    <>
      {data ? (
        <div>
          <div
            className="container-fluid row mx-auto my-5 montserrat"
            id={styles.checkout}
          >
            <div className="col-lg-12 mt-5 border bg-default">
              <div className="container row mx-auto mt-4">
                <div className="col-lg-3 pl-5">
                  <Image
                    src="/images/checkout_image-1.png"
                    alt="checkout_image"
                    width={144}
                    height={146}
                  />
                </div>
                <div className="col-lg-6 my-auto">
                  <h3 className="defaultColor">
                    <b>CONGRATULATIONS!</b>
                  </h3>

                  <p className="" id="p">
                    Your Booking has been successfully confirmed on{" "}
                    <b>{dateForm}</b>.<br />
                    Confirmation will be sent through email within 15 mins.<br />
                    We will contact you soon.
                  </p>
                </div>
                <div className="col-lg-3  m-auto">
                  <p className="mb-2 defaultColor">
                    Booking ID : <b>{order_id}</b>
                    <br />
                    <small>Easily Track Your Order</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 mt-5 bg-default border">
              <h3 className="my-4 ml-2 defaultColor montserrat">
                PRODUCT DETAILS
              </h3>
              {eval(data).map((product) => (
                <>
                  <div className="container row">
                    <div className="col-4 border bg-white">
                      <div className="d-flex h-100 align-items-center justify-content-center">
                        <Image
                          src={"/" + product.prod_image}
                          alt={product.prod_name}
                          width={100}
                          height={120}
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <h3 className="cinzel defaultColor">
                        {product.prod_name}
                      </h3>
                      <p className="montserrat mb-2" id="p">
                        {product.prod_detail}
                      </p>
                      <p className="montserrat defaultColor">
                        {product.have_fabrics ? (
                          <>I have all/some the fabric for the item</>
                        ) : (
                          <>I Don’t have fabric for the item</>
                        )}
                      </p>
                      <p className="montserrat" id="p">
                        Qty{" "}
                        <button id={styles.quantity}>{product.quantity}</button>
                      </p>
                    </div>
                  </div>
                  <hr className="border" />
                </>
              ))}
            </div>

            <div className="col-lg-4 col-md-5 mt-5">
              <div className="border bg-default">
                <div className="m-2">
                  <h5 className="montserrat defaultColor">
                    Your slot has been successfully booked for{" "}
                    <b>
                      {dateForm} at {timeForm}{" "}
                    </b>
                    .
                  </h5>
                  <p>Please be available at that Selected Time slot. </p>
                </div>

                <Bookingdetails />
                <CancelPopup />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Link href="/" passHref={true}>
          <div className="mt-5 py-5 text-center btn-dark-jm">
            You are Lost
            <br />
            Go to Home.
          </div>
        </Link>
      )}
    </>
  );
}
