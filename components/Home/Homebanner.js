import Link from "next/link";
import styles from "../../styles/Home/Homebanner.module.css"
import Image from "next/image";
import Head from "next/head";

export default function Homebanner() {
  return (
    <div
      id="homeBanner"
      className="carousel slide mt-5 mt-md-0"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className={styles["carousel-item"]+" active"} >
          <Image
            className="d-block w-100"
            src="/images/home_banner1.png"
            alt="First slide"
            layout="fill"
          />
          <div className={styles.bgrad}></div>
          <div className={styles["carousel-banner1"] +" text-white cinzel"}>
            <h2>
              Dont go looking for perfect fit
              <br />
              We are here to help u.
            </h2>
            <p>Because dressmaking is our passion.</p>
            <Link href="/category">
              <a className={styles["btn-dark-jm"] +" btn btn-lg"}>Book Online Appointment</a>
            </Link>
          </div>
          <div className={"row container-fluid "+styles["carousel-footer"]+" cinzel text-center text-white pb-4"}>
            <p className="col-6 col-lg-3 my-auto">
              <b>Great Fit</b>
            </p>
            <p className="col-3 d-none d-lg-block my-auto">
              <b>Lorem ipsum</b>
            </p>
            <p className="col-3 d-none d-lg-block my-auto">
              <b>Doorstep Service</b>
            </p>
            <p className="col-6 col-lg-3 my-auto">
              <b>Free design consultancy</b>
            </p>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-next"
        href="#homeBanner"
        role="button"
        data-slide="next"
      >
        <i className="fas fa-chevron-right fa-lg ml-auto mr-lg-5 mr-md-4 mr-sm-3 mr-2"></i>
      </a>
    </div>
  );
}
