import styles from "../../styles/Home/Whyus.module.css";
import Image from "next/image";

export default function Whyus() {
  return (
    <div className="defaultColor text-center montserrat" id="whyus">
      <h3 className="text-center defaultColor mt-5 mb-4 cinzel">Why US?</h3>
      <div className="container-fluid row cards mx-auto">
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mx-auto mb-5">
          <div className={"card card-body " + styles.card_bg + " h-100"}>
            <Image
              className="d-block card-img w-100 my-auto"
              src="/images/whyus-1.png"
              alt="Get Your Fabric Stitched"
              width={125}
              height={125}
            />
            <p className="card-text my-auto">Get Your Fabric Stitched</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mx-auto mb-5">
          <div className={"card card-body " + styles.card_bg + " h-100"}>
            <Image
              className="d-block card-img w-100 my-auto"
              src="/images/whyus-2.png"
              alt="Revamp your wardrobe"
              width={125}
              height={125}
            />
            <p className="card-text my-auto">Revamp your wardrobe</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mx-auto mb-5">
          <div className={"card card-body " + styles.card_bg + " h-100"}>
            <Image
              className="d-block card-img w-100 my-auto"
              src="/images/whyus-3.png"
              alt="Create the same outfit for you"
              width={125}
              height={125}
            />
            <p className="card-text my-auto">Create the same outfit for you</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mx-auto mb-5">
          <div className={"card card-body " + styles.card_bg + " h-100"}>
            <Image
              className="d-block card-img w-100 my-auto"
              src="/images/whyus-4.png"
              alt="Design a new look"
              width={125}
              height={125}
            />
            <p className="card-text my-auto">Design a new look</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-6 mx-auto mb-5">
          <div className={"card card-body " + styles.card_bg + " h-100"}>
            <div>
              <Image
                src="/images/whyus-5.png"
                alt="Comfort and convience"
                width={125}
                height={125}
              />
            </div>
            <p className="card-text my-auto">Comfort and convience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
