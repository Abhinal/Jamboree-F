import { useDispatch } from "react-redux";
import Checkoutbanner from "../../components/Checkout/Checkoutbanner";
import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";
import { updateCancelReason } from "../../store/reducer";

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://data.jamboreefashions.com/api/v1/product/reason`
  );
  const data = await res.json();

  return { props: { data } };
}

export default function Checkout({data}) {
  const dispatch = useDispatch()
  dispatch(updateCancelReason(data))
  return <div>
  <Navbar />
  <Checkoutbanner />
  <Footer />
  </div>;
}
