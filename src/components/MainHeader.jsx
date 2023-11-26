import React from "react";
import { klogo } from "../assets/main/index";
import { navLinks } from "../constants";
import CtaButton from "./CtaButton";
const MainHeader = () => {
  const links = navLinks.map((link) => {
    return <li key={link.id}>{link.title}</li>;
  });
  return (
    <header className="w-full bg-[#EDF2F7] px-6 py-2">
      <nav className="flex justify-between items-center">
        {/* logo */}
        <img src={klogo} alt="krypt-wallet-logo" className="w-[50px]" />
        {/* links */}
        <ul className="flex gap-4">{links}</ul>
        {/* ctas */}
        <span>
          <CtaButton path="/signin" title="Sign In" />
        </span>
      </nav>
    </header>
  );
};

export default MainHeader;

// EDF2F7
