import styles from "../styles/Faq.module.css";
import Image from "next/image";
import Navbar from "../components/Layout/Navbar";

export default function Faq() {
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
                <div
                  className="card border-0 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="card-header" id="headingOne">
                    <h6
                      className="mb-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-controls="collapseOne"
                    >
                      How can I install this app?
                      <span className="lni-chevron-up" />
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-parent="#faqAccordion"
                  >
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto quidem facere deserunt sint animi sapiente
                        vitae suscipit.
                      </p>
                      <p>
                        Appland is completely creative, lightweight, clean &amp;
                        super responsive app landing page.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card border-0 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="card-header" id="headingOne">
                    <h6
                      className="mb-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-controls="collapseOne"
                    >
                      How can I install this app?
                      <span className="lni-chevron-up" />
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-parent="#faqAccordion"
                  >
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto quidem facere deserunt sint animi sapiente
                        vitae suscipit.
                      </p>
                      <p>
                        Appland is completely creative, lightweight, clean &amp;
                        super responsive app landing page.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card border-0 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="card-header" id="headingOne">
                    <h6
                      className="mb-0 collapsed"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-controls="collapseOne"
                    >
                      How can I install this app?
                      <span className="lni-chevron-up" />
                    </h6>
                  </div>
                  <div
                    className="collapse"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-parent="#faqAccordion"
                  >
                    <div className="card-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto quidem facere deserunt sint animi sapiente
                        vitae suscipit.
                      </p>
                      <p>
                        Appland is completely creative, lightweight, clean &amp;
                        super responsive app landing page.
                      </p>
                    </div>
                  </div>
                </div>
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
                <a href="#" className={styles.support_a}>
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
