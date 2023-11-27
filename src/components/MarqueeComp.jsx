import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComp = () => {
  return (
    <div className="flex items-center">
      <div className=" bg-white px-2">
        <h3 className="font-semibold">PoweredBy</h3>
        <p className="text-xs">CoinPayments</p>
      </div>
      <Marquee loop={0} direction="left" delay={1} speed={50}>
        <div className="flex items-center gap-4">
          <span>A</span>
          <span>A</span>
          <span>A</span>
          <span>A</span>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComp;
