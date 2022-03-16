import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Layout/Navbar";
import Homebanner from "../components/Home/Homebanner"
import Whyus from "../components/Home/Whyus";
import Howitworks from "../components/Home/Howitworks";
import Customerreviews from "../components/Home/Customerreviews";
import Customerbanner from "../components/Home/Customerbanner";
import Footer from "../components/Layout/Footer";
import Aboutus from "../components/Home/Aboutus";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homebanner />
      <Whyus />
      <Howitworks />
      <Aboutus />
      <Customerreviews />
      <Customerbanner />
      <Footer />
    </>
  );
}
