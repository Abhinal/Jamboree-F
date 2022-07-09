import React from "react";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import PinterestLayout from "../components/Layout/PinterestLayout";

export default function gallery() {
  return (
    <div>
      <Navbar />
      <PinterestLayout />
      {/* <Footer /> */}
    </div>
  );
}
