import React from "react";
import Banner from "./components/banner";
import Service from "./components/service";
import AboutSection from "./components/about";
import DownloadApp from "./components/downloadApp";
import Products from "./components/products";
import Features from "./components/features";
import ScreenShots from "./components/screenshots";
import ClientsReview from "./components/clients";
import CallToAction from "./components/CTA";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <AboutSection />
      <DownloadApp />
      <Products />
      <Features />
      <ScreenShots />
      <ClientsReview />
      <CallToAction />
    </>
  )
};

export default Home;
