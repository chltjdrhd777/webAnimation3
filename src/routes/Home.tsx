import React from "react";
import Sidebar from "layout/Sidebar";
import Header from "layout/Header";
import Footer from "layout/Footer";
import Hero from "components/Hero";
import Sections from "components/Sections";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sections />
      <Footer />
    </>
  );
}

export default Home;
