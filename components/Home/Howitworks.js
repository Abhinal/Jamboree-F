import Link from "next/link";
import styles from "../../styles/Home/Howitworks.module.css";
import Image from "next/image";

export default function Howitworks() {
  return (
    <div
      className="mx-auto my-3 py-5 defaultColor text-center montserrat px-lg-5 px-md-4 px-sm-2 pb-3"
      id={styles.hiw}
    >
      <h3 className="cinzel">How it works?</h3>
      <div className="container-fluid row cards mx-auto mt-5">
        <div className="col-lg-4 col-md-6 mx-auto mb-5">
          <div className="card card-body h-100 border-0">
            <h3 className="card-title">Book an Appointment</h3>
            <div>
              <Image
                src="/images/howitworks_image-1.png"
                alt="book an appointment"
                width={280}
                height={250}
              />
            </div>

            <p className="card-text">
              Lorem Ipsum is simply dummy text ofambled it to make a
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mx-auto mb-5">
          <div className="card card-body h-100 border-0">
            <h3 className="card-title">Talk to Designers</h3>
            <div>
              <Image
                src="/images/howitworks_image-2.png"
                alt="talk to designers"
                width={245}
                height={250}
              />
            </div>

            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ien the industry&apos;s standard dumme a
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mx-auto mb-5">
          <div className="card card-body h-100 border-0">
            <h3 className="card-title">Sit back and relax</h3>
            <div>
              <Image
                src="/images/howitworks_image-3.png"
                alt="sit back and relax"
                width={237}
                height={250}
              />
            </div>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standar
            </p>
          </div>
        </div>
      </div>
      <Link href="/category">
        <a className={"btn btn-lg " + styles["btn-dark-jm"]}>
          Book Online Appointment
        </a>
      </Link>
    </div>
  );
}
