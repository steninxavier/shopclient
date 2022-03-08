import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Informations from "../components/Informations";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Informations />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
