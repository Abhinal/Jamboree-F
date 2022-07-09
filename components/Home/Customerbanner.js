import Link from "next/link";
import styles from "../../styles/Home/Customerbanner.module.css";
import Image from "next/image";

export default function Customerbanner() {
  return (
    <div className="mx-auto">
      <h3 className="text-center defaultColor mt-5 mb-4 cinzel">
        Customer Gallery
      </h3>

      <div className="row mx-auto" id={styles.cbanner}>
        <div className="col-lg-6 col-12 ml-auto p-0">
          <div className="container-fluid row mx-0">
            <div className="col-lg-6 col-6">
              <div className="border" id={styles.img1}>
                <Image
                  src="/images/customerimage-3.png"
                  layout="fill"
                  className="border"
                  id={styles.img1}
                  alt="customer gallery image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-6">
              <div id={styles.img2}>
                <Image
                  src="/images/customerimage-1.png"
                  layout="fill"
                  className="border"
                  id={styles.img2}
                  alt="customer gallery image"
                />
              </div>
            </div>

            <div className="col-lg-12 col-12">
              <div id={styles.img3}>
                <Image
                  src="/images/customerimage-5.png"
                  layout="fill"
                  className="border"
                  id={styles.img3}
                  alt="customer gallery image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-12 p-0 mt-1 mt-lg-0">
          <div className="container-fluid row mx-0">
            <div className="col-lg-6 col-6">
              <div id={styles.img4} className="h-100">
                <Image
                  src="/images/customerimage-2.png"
                  layout="fill"
                  className="border"
                  id={styles.img4}
                  alt="customer gallery image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-6">
              <div id={styles.img5}>
                <Image
                  src="/images/customerimage-4.png"
                  layout="fill"
                  className="border"
                  id={styles.img5}
                  alt="customer gallery image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="/gallery" passHref={true}>
        <h5 className="text-center defaultColor mt-5 mb-5" role={'button'}>Show more</h5>
      </Link>
    </div>
  );
}
