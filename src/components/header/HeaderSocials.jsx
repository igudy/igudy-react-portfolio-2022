import React from "react"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
// import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials flex flex-col justify-center gap-3">
      <a href="https://github.com/igudy" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/goodness-igunma-65bb581a7/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <div className="h-10 w-[1px] justify-center ml-2 bg-orange-400"></div>
    </div>
  );
}

export default HeaderSocials
