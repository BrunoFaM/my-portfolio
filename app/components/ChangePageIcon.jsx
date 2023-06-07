import React from "react";
import leftArrow from "../../public/leftArrow.svg";
import rightArrow from "../../public/rightArrow.svg";
import Link from "next/link";
import Image from "next/image";

function ChangePageIcon({ direction, url, hacia }) {
  let d;
  let icon;
  if(direction == "l"){
    d = "left";
    icon = leftArrow;
  }else{
    d = "right"
    icon = rightArrow; 
  }
  return (
    <div className={`absolute  top-1/2 m-2 right-0 animate-bounce  p-2 md:hidden`}>
      <Link href={url} title={hacia}>
        <Image
          alt="icono"
          width={40}
          height={40}
          src={icon}
        ></Image>
      </Link>
    </div>
  );
}

export default ChangePageIcon;
