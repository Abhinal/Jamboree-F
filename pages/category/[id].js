import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Items from "../../components/Orders/Items";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const res = await fetch("http://103.217.221.52/api/v1/product/category");
  const cats = await res.json();

  const paths = cats.map((cat) => ({
    params: { id: cat.cat_name.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://103.217.221.52/api/v1/product/category/${params.id}`
  );
  const data = await res.json();

  return { props: { data } };
}

export default function categorySelect({ data }) {
  return (
    <>
      <Navbar />
      <Items data={data} />
      <Footer />
    </>
  );
}
