import styles from "../styles/Faq.module.css";
import Image from "next/image";
import Navbar from "../components/Layout/Navbar";
import FaqEachQuestion from "../components/Layout/FaqEachQuestion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFaq } from "../store/reducer";
import FaqQuestionAnswer from "../components/Layout/FaqQuestionAnswer";

export default function Faq() {
  // const [faqQuesAns, setFAQ] = useState([]);
  const headers = useSelector((state) => state.jamboree.headers);
  const faqQuesAns = useSelector((state) => state.jamboree.faqQuesAns);
  const dispatch = useDispatch();

  useEffect(() => {
    const response = fetch("https://data.jamboreefashions.com/api/v1/product/faq", {
      method: "GET",
      headers,
    }).then((res) => {
      if (res.ok) {
        res.json().then((resp) => {
          dispatch(updateFaq(resp))
        })
      }
    });
  }, [])



  return (
    <>
      <Navbar />
      <div
        className={styles.faw_area + " " + styles.section_padding_130}
        id="faq"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-6">
              <div
                className="section_heading text-center wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="w-75 mx-auto">
                  <Image
                    src="/images/faq.png"
                    className="img-fluid"
                    alt="faq"
                    width={607}
                    height={323}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* FAQ Area*/}
            <div className="col-12 col-sm-10 col-lg-8">
              <h3 className="text-left">
                <b>Frequently Asked Questions</b>
              </h3>
              <div
                className={"accordion " + styles["faq-accordian"]}
                id="faqAccordion"
              >


                {faqQuesAns ? <FaqQuestionAnswer faqQuesAns={[faqQuesAns]} /> :"0"}


              </div>
              {/* Support Button*/}
              <div
                className={
                  styles["support-button"] +
                  " text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
                }
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <i className={"lni-emoji-sad " + styles.support_i} />
                <p className="mb-0 px-2">Can&apos;t find your answers?</p>
                <a href="https://wa.me/919123337544?text=Hi Jamboree! I need your help." target="_blank" rel="noreferrer" className={styles.support_a}>
                  {" "}
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
