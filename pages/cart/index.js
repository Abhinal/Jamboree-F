import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";
import OrderedItems from "../../components/Orders/OrderedItems";


export default function Cart() {
  return (
    <div>
      <Navbar />
      <OrderedItems />
      <Footer />
    </div>
  );
}
