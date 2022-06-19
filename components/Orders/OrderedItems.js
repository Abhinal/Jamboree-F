import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/Orders/OrderedItems.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import next from "next";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductCart,
  updateLastOrder,
  updatePhone,
  updateProductCart,
} from "../../store/reducer";

export default function OrderedItems() {
  const router = useRouter();
  const headers = useSelector((state) => state.jamboree.headers);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [dateError, setDateErr] = useState(false);
  const [timeError, setTimeErr] = useState(false);
  const [numExist, setNumExist] = useState(false);

  useEffect(() => {
    let mounted = true;
    const res = fetch("http://103.217.221.52/api/v1/product/cartDetails", {
      method: "POST",
      headers,
    }).then((res) => {
      if (res.ok) {
        res.json().then((resp) => {
          setData(resp);
        });
      }
    });
    return () => (mounted = false);
  }, [headers]);

  var dtToday = new Date();
  var date = new Date(new Date(dtToday).getTime() + 60 * 60 * 24 * 1000);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();

  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();
  var minDate = year + "-" + month + "-" + day;

  var date = new Date(new Date(dtToday).getTime() + 60 * 60 * 24 * 1000 * 30);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();

  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();
  var maxDate = year + "-" + month + "-" + day;

  const [dateForm, setDate] = useState("");
  const [timeForm, setTime] = useState("");

  var sentData = {};
  var nextData = data;
  for (var i = 0, l = data.length; i < l; i++) {
    sentData[i] = { cart_id: data[i]["cart_id"] };
  }
  const fabricSelection = async (idx) => {
    sentData[idx]["have_fabrics"] = !sentData[idx]["have_fabrics"];
    nextData[idx]["have_fabrics"] = !sentData[idx]["have_fabrics"];
  };

  const confirm = async () => {
    if (dateForm) {
      if (timeForm) {
        const numRes = await fetch(
          "http://103.217.221.52/api/v1/user/phoneExist",
          {
            method: "GET",
            headers,
          }
        ).then((res) => {
          if (res.ok) {
            res.json().then((resp) => {
              if (!resp.is_exist) {
                let phone_number = prompt("Please enter your mobile number:", "");
                if (phone_number) {
                  const response = fetch(
                    "http://103.217.221.52/api/v1/user/phoneExist",
                    {
                      method: "POST",
                      body: JSON.stringify({
                        phone_number,
                      }),
                      headers,
                    }
                  ).then((res) => {
                    if (res.ok) {
                      setNumExist(true);
                      dispatch(updatePhone(phone_number))
                    }
                  });
                }
              } else {
                setNumExist(true)
              }
            });
          }

          if (numExist) {
            const response = fetch(
              "http://103.217.221.52/api/v1/product/order",
              {
                method: "POST",
                body: JSON.stringify({
                  sentData,
                  dateForm,
                  timeForm,
                }),
                headers,
              }).then((res) => {
                if (res.ok) {
                  res.json().then((resp) => {
                    const order_id = resp.order_id;
                    dispatch(deleteProductCart());
                    dispatch(
                      updateLastOrder({
                        data: JSON.stringify(nextData),
                        order_id: order_id,
                        date: dateForm,
                        time: timeForm,
                      })
                    );

                    router.push("/cart/checkout");
                  });
                }
              }
            )
          }
        });
      } else {
        setDateErr(false);
        setTimeErr(true);
        router.push("#dateForm");
      }
    } else {
      setTimeErr(false);
      setDateErr(true);
      router.push("#dateForm");
    }
  };

  return (
    <div>
      {data.length ? (
        <div className="container row mx-auto mt-5" id={styles.OrderedItems}>
          <div className="col-lg-8 mt-5 pr-2 bg-default border">
            <h3 className="my-4 ml-2 defaultColor montserrat">
              PRODUCT DETAILS
            </h3>
            {data.map((product, idx) => (
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
                    <h3 className="cinzel defaultColor">{product.prod_name}</h3>
                    <p className="montserrat mb-2" id="p">
                      {product.prod_detail}
                    </p>
                    <p className="montserrat defaultColor">
                      <form className="form-check pl-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id={styles.flexRadioDefault1}
                          onClick={() => fabricSelection(idx)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          I have all/some the fabric for the item
                        </label>
                      </form>
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

          <div className="col-lg-4 mt-5 " id="dateForm">
            <div className="border h-100 p-3 bg-default">
              <h3 className="cinzel defaultColor mt-3">Book a slot </h3>
              <form>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    min={minDate}
                    max={maxDate}
                    onChange={(e) => setDate(e.target.value)}
                    value={dateForm}
                  />
                  {dateError ? (
                    <p className="text-danger">Please Select Correct Date</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="time"
                    className="form-control"
                    onChange={(e) => setTime(e.target.value)}
                    value={timeForm}
                  />
                  {timeError ? (
                    <p className="text-danger">Please Select Correct Time</p>
                  ) : (
                    ""
                  )}
                </div>
              </form>
            </div>
          </div>

          <button
            className="btn my-4 mx-auto"
            id={styles.button}
            onClick={confirm}
          >
            Confirm order
          </button>
        </div>
      ) : (
        <div className="container row mx-auto mt-5" id={styles.OrderedItems}>
          <div className="col-lg-12 my-5 pr-2 bg-default border">
            <h3 className="my-4 ml-2 defaultColor montserrat">
              No Items in the cart
            </h3>
            <button
              className="btn mb-5 btn-dark-jm"
              onClick={() => router.back()}
            >
              Back
            </button>
            <button
              className="btn mb-5 btn-dark-jm mx-5"
              onClick={() => router.push("/")}
            >
              Go to Home.
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
