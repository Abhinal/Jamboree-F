import styles from '../../styles/Home/Aboutus.module.css'
import Image from 'next/image';

export default function Aboutus() {
  return (
    <div id="about" className="pt-4">
    <div className="mb-5" id={styles.aboutus}>
      <div className="container-fluid mt-5 mr-0 ">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className={"ml-lg-5 ml-md-4 ml-3" + styles.line}></div>
              <div className="col-lg-8 col-10">
                <h3 className="defaultColor cinzel">ABOUT US</h3>
                <p className="montserrat">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, ake Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <Image
              width={580}
              height={475}
              src="/images/aboutus-1.png"
              alt="about us"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 mr-0 ">
        <div className="row justify-content-between align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="line ml-lg-5 ml-md-4 ml-3"></div>
              <div className="col-lg-8 col-10">
                <h3 className="defaultColor cinzel">
                  Dont let your wardrobe empty
                </h3>
                <p className="montserrat">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the amblen the industry&apos;s
                  standard dummy text ever since the ambled it to make a type
                  specimen book. It has suok. It has survrvived not only five
                  centuries, but also with the release of Letraset sheets
                  containing Lorem Ipsum passages, ake Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Image
              id={styles["img-2"]}
              width={580}
              height={475}
              src="/images/aboutus-2.png"
              alt="dont let your wardrobe empty"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
