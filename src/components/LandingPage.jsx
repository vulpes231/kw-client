import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import GetStarted from "./GetStarted";
import Defi from "./Defi";

const LandingPage = () => {
  return (
    <section className="min-h-screen">
      <div className="mt-28">
        <Hero />
        <GetStarted />
      </div>
      <div>
        <Defi />
      </div>
      <Footer />
    </section>
  );
};

export default LandingPage;
