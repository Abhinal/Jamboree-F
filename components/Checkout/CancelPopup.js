import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeHeaders } from "../../store/reducer";
import styles from "../../styles/Checkout/CancelPopup.module.css";

export default function CancelPopup() {
  const order_id = useSelector((state) => state.jamboree.lastOrder.order_id);
  const dispatch = useDispatch()
  dispatch(makeHeaders)
  const headers = useSelector((state) => state.jamboree.headers);
  const router = useRouter();
  const cancel_reason = useSelector((state) => state.jamboree.cancel_reason)
  const [reasonForm, setReason] = useState("")
  const [reasonErr, setReasonErr] = useState("")
  const [comment, setComment] = useState("")

  console.warn(reasonForm)
  const cancel = async () => {
    if(reasonForm){
      const response = await fetch("http://103.217.221.52/api/v1/product/order", {
      method: "DELETE",
      body: JSON.stringify({
        order_id,
        reason: reasonForm,
        comment,
      }),
      headers,
    }).then((res) => {
      if (res.ok) {
        router.push("/");
      }
    });
    }else{
      setReasonErr(true)
    }
  };
  return (
    <div className="d-flex">
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-dark-jm my-2 px-4 mx-auto"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Cancel Order
      </button>

      {/* Modal */}
      <div
        className="modal fade mx-auto"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered mx-auto"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-center defaultColor 
                        montserrat"
                id="exampleModalLongTitle"
              >
                Are You sure You Want to cancel the Booking?
              </h5>
            </div>

            <div className="modal-footer flex-nowrap">
              <button
                type="button"
                className="btn btn-lg w-50 btn-dark-jm"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#exampleModalCenter2"
              >
                Yes, Cancel
              </button>
              <button
                type="button"
                className="btn btn-lg w-50 text-white btn-dark-jm"
                id="btn-modi"
                data-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade mx-auto"
        id="exampleModalCenter2"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="text-center defaultColor montserrat">
              <p
                className="mt-4 text-left ml-4 mb-0"
                id="exampleModalLongTitle"
              >
                <b>Please Select the reason for Cancellation</b>
              </p>
              <p className="text-left ml-4">
                The following information is only for our records and will not
                prevent you from cancelling your order.
              </p>
            </div>

            <div className="form-group mx-5 defaultColor">
              <fieldset className={styles["the-fieldset"]}>
                <legend className={styles["the-legend"]}>Choose Reason</legend>
                <select className="w-100 defaultColor" onChange={(e) => {setReason(e.target.value)}}>
                  <option />
                  {cancel_reason?cancel_reason.map((reason, idx) => (
                    <option key={idx} value={reason.reason}>{reason.reason}</option>
                  )): ''}
                </select>
                {reasonErr? <p className="text-danger">Please Choose Reason</p> : ""}
              </fieldset>
              <fieldset className={styles["the-fieldset"]}>
                <legend className={styles["the-legend"]}>
                  Additional comment
                </legend>
                <textarea defaultValue={""} className="w-100 defaultColor" onChange={(e) => {setComment(e.target.value)}}/>
              </fieldset>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn w-50 text-white btn-dark-jm"
                data-dismiss= {reasonForm?"modal":""}
                onClick={cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
