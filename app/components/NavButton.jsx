"use client";
import { useState } from "react";
import Image from "next/image";
import barIco from "../../public/barIcon.svg";
import closeIco from "../../public/xIcon.svg";

function NavButton() {
  const [open, setOpen] = useState(true);
  return open ? (
    <Image alt="" src={barIco} width={30} height={30} onClick={() => setOpen(!open)} />
  ) : (
    <Image alt="" src={closeIco} width={30} height={30} onClick={() => setOpen(!open)} />
  );
}

export default NavButton;
