"use client";
import Image from "next/image";
import linkedinIco from "../../public/linkedin.svg";
import gitIco from "../../public/git.svg";
import mailIco from "../../public/mail.svg";
import openIco from "../../public/upArrow.svg";
import closeIco from "../../public/dowArrow.svg";
import { useState } from "react";

function SocialNav() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }
  return (
    <nav className="bg-black absolute inline-block w-max p-1  bottom-2 right-2">
      {open ? (
        <>
          <ul className="flex flex-col items-center justify-center">
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Image alt="" src={linkedinIco} width={35} height={35}></Image>
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Image alt="" src={gitIco} width={35} height={35}></Image>
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Image alt="" src={mailIco} width={35} height={35}></Image>
              </a>
            </li>
            <li>
              <Image
                className="mb-0 pb-0"
                onClick={handleClick}
                alt=""
                src={closeIco}
                width={30}
                height={30}
              ></Image>
            </li>
          </ul>
        </>
      ) : (
        <Image
          className="mb-0 pb-0"
          onClick={handleClick}
          alt=""
          src={openIco}
          width={30}
          height={30}
        ></Image>
      )}
    </nav>
  );
}

export default SocialNav;
