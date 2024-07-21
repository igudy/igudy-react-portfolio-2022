import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="pt-28 flex justify-center overflow-hidden">
      <div className="container mx-auto text-center h-full relative">
        <h5 className="text-2xl my-2">Hello I'm</h5>
        <h2 className="text-4xl">Goodness Igunma (Igudy).</h2>
        <h5 className="text-light text-md my-4">
          A Creative Software Engineer🚀
        </h5>
        <CTA />
        <HeaderSocials />

        <a
          href="#contact"
          className="scroll__down absolute right-[-2.3rem] bottom-10 rotate-90 font-light text-sm"
        >
          Scroll Down
          {/* <div className="h-10 w-[1px] bg-orange-400"></div> */}
        </a>
      </div>
      {/* <div className="me bg-gradient-to-b from-primary to-transparent w-88 h-120 absolute left-1/2 transform -translate-x-1/2 mt-16 rounded-full overflow-hidden p-20 pt-6">
          <img src={ME} alt="me" />
        </div> */}
    </header>
  );
};

export default Header;
