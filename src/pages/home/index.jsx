import React from "react";
import Banner from "./components/banner";
import Service from "./components/service";
import AboutSection from "./components/about";
import DownloadApp from "./components/downloadApp";
import Products from "./components/products";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <AboutSection />
      <DownloadApp />
      <Products />
    </>
  )
};

export default Home;
