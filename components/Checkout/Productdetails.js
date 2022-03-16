import React from "react";
import styles from "../../styles/Checkout/Checkoutbanner.module.css";
import Image from "next/image";
export default function Productdetails({ data }) {
  return (
    <div className="col-lg-8 col-md-7 mt-5 bg-default border">
      <h3 className="my-4 ml-2 defaultColor montserrat">PRODUCT DETAILS</h3>
      {data.map((product) => (
        <>
          <div className="container row" id="ss">
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
              <h3 className="cinzel defaultColor">{product.prod_name}</h3>
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
                Qty <button id={styles.quantity}>{product.quantity}</button>
              </p>
            </div>
          </div>
          <hr className="border" />
        </>
      ))}
    </div>
  );
}
