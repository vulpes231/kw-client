import React from "react";

const Marquee = () => {
  return (
    <div className="flex text-sm gap-2 text-left">
      <div className="w-[35%] bg-white px-2">
        <h3 className="font-semibold">PoweredBy</h3>
        <p className="text-xs">CoinPayments</p>
      </div>
      <div className="w-[65%]">
        <span>A</span>
        <span>A</span>
        <span>A</span>
        <span>A</span>
      </div>
    </div>
  );
};

export default Marquee;
