import Link from "next/link";
import styles from "../../styles/Orders/Categories.module.css";
import Image from "next/image";
const Categories = ({ cats }) => {

  return (
    <div
      className="cinzel defaultColor my-5 text-center pt-5"
      id={styles.category}
    >
      <h3>For whom Would you like to get stitched?</h3>
      <div className="container row mx-auto mt-5">
        {cats.map((cat, idx) => (
          <div className="col-lg-4 col-md-4 col-sm-6" key={idx}>
            <Link href={"/category/" + cat.cat_name}>
              <a className="defaultColor">
                <Image
                  src={"/"+cat.cat_image}
                  alt={cat.cat_name}
                  width={283}
                  height={366}
                />
                <h4 className="mt-3">{cat.cat_name}</h4>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
