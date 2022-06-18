import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Categories from "../../components/Orders/Categories";

export const getStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/v1/product/category");
  const data = await res.json();
  return {
    props: { cats: data },
  };
};

export default function Category({ cats }) {
  return (
    <div>
      <Navbar />
      <Categories cats={cats} />
      <Footer />
    </div>
  );
}
