import styles from "../../styles/Home/Customerreviews.module.css";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};

export default function Customerreviews() {
  return (
    <>
      <div id="reviews" className="py-3">
        <div id={styles.crbanner} className="my-5 py-3">
          <h3 className="text-center defaultColor mt-5 mb-4 cinzel">
            Customer reviews
          </h3>
          <Carousel
              responsive={responsive}
              // customRightArrow={<CustomRightArrow />}
              // customLeftArrow={<CustomLeftArrow />}
            >
              <div className="card card-body border-0 bg-transparent">
                <div className="row justify-content-center">
                  <div className="col-3">
                    <Image
                      src="/images/customer1.png"
                      alt="profile pic"
                      width={86}
                      height={86}
                    />
                  </div>
                  <div className="col-7 card-title">
                    Sumit Keshwani
                    <br />5 ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="card-text mx-4 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an u
                </p>
              </div>
              <div className="card card-body border-0 bg-transparent">
                <div className="row justify-content-center">
                  <div className="col-3">
                    <Image
                      src="/images/customer1.png"
                      alt="profile pic"
                      width={86}
                      height={86}
                    />
                  </div>
                  <div className="col-7 card-title">
                    Sumit Keshwani
                    <br />5 ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="card-text mx-4 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an u
                </p>
              </div>
              <div className="card card-body border-0 bg-transparent">
                <div className="row justify-content-center">
                  <div className="col-3">
                    <Image
                      src="/images/customer1.png"
                      alt="profile pic"
                      width={86}
                      height={86}
                    />
                  </div>
                  <div className="col-7 card-title">
                    Sumit Keshwani
                    <br />5 ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="card-text mx-4 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an u
                </p>
              </div>
              <div className="card card-body border-0 bg-transparent">
                <div className="row justify-content-center">
                  <div className="col-3">
                    <Image
                      src="/images/customer1.png"
                      alt="profile pic"
                      width={86}
                      height={86}
                    />
                  </div>
                  <div className="col-7 card-title">
                    Sumit Keshwani
                    <br />5 ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="card-text mx-4 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an u
                </p>
              </div>
              <div className="card card-body border-0 bg-transparent">
                <div className="row justify-content-center">
                  <div className="col-3">
                    <Image
                      src="/images/customer1.png"
                      alt="profile pic"
                      width={86}
                      height={86}
                    />
                  </div>
                  <div className="col-7 card-title">
                    Sumit Keshwani
                    <br />5 ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="card-text mx-4 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an u
                </p>
              </div>
              <div className="card card-body border-0 bg-transparent">
                <div className="row justify-content-center">
                  <div className="col-3">
                    <Image
                      src="/images/customer1.png"
                      alt="profile pic"
                      width={86}
                      height={86}
                    />
                  </div>
                  <div className="col-7 card-title">
                    Sumit Keshwani
                    <br />5 ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="card-text mx-4 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an u
                </p>
              </div>
            </Carousel>
        </div>
      </div>

      
    </>
  );
}
