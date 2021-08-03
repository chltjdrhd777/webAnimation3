import React from "react";
import Sidebar from "layout/Sidebar";
import Header from "layout/Header";
import Footer from "layout/Footer";
import Main from "components/Main";
import Hero from "components/Hero";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
