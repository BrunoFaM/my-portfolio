"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import barIco from "../../public/barIcon.svg";
import closeIco from "../../public/xIcon.svg";
//this controll the hamburger menu
function NavButton() {
  const [close, setClose] = useState(false);
  return (
    <>
      <Image
        alt=""
        className="sm:hidden"
        src={close ? closeIco : barIco}
        width={30}
        height={30}
        onClick={() => setClose(!close)}
      />
      {!close && (
        <nav className="fixed top-[64px] inset-x-0 bg-red-400">
          <ul className="flex flex-col gap-5 justify-center items-center">
            <Link onClick={() => setClose(!close)} href="/about">Sobre mi</Link>
            <Link onClick={() => setClose(!close)} href="/works">Projectos</Link>
            <Link onClick={() => setClose(!close)} href="/contact">Contacto</Link>
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavButton;
