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
import EachProduct from "./EachProduct";

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
    const res = fetch("https://data.jamboreefashions.com/api/v1/product/cartDetails", {
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
    nextData[idx]["have_fabrics"] = !nextData[idx]["have_fabrics"];
  };


  useEffect(()=>{

    if (numExist) {
      const response = fetch(
        "https://data.jamboreefashions.com/api/v1/product/order",
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

  }, [numExist])

  const confirm = async () => {
    if (dateForm) {
      if (timeForm) {
        const numRes = await fetch(
          "https://data.jamboreefashions.com/api/v1/user/phoneExist",
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
                    "https://data.jamboreefashions.com/api/v1/user/phoneExist",
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
              <EachProduct product={product} idx={idx} key={idx} fabricSelection={fabricSelection}/>
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
                  {/* <input
                    type="options"
                    className="form-control"
                    onChange={(e) => setTime(e.target.value)}
                    value={timeForm}
                  /> */}
                  <select name="time" id="time" className="form-control" onChange={(e) => setTime(e.target.value)}>
                    <option value="">Select Time Slot</option>
                    <option value="M to 12 PM">10 AM to 12 PM</option>
                    <option value="12 PM to 2 PM">12 PM to 2 PM</option>
                    <option value="2 PM to 4 PM">2 PM to 4 PM</option>
                    <option value="4 PM to 6 PM">4 PM to 6 PM</option>
                    <option value="6 PM to 8 PM">6 PM to 8 PM</option>
                  </select>
                  {timeError ? (
                    <p className="text-danger">Please Select Correct Time Slot</p>
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
