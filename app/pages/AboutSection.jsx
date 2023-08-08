import Image from "next/image";
import React from "react";
import javaIco from "../../public/java.svg"
import springIco from "../../public/spring.svg"
import mySqlIco from "../../public/mySql.svg"
import springBootIco from "../../public/SBoot.svg"

function AboutSection() {
  return (
    <section className="bg-base min-h-screen  w-screen font-libre p-3">
      <div className="resumen">
        <h1 className="text-3xl text-center mb-5 font-libreBold">Sobre Mi</h1>
        <p className="text-left p-1 leading-relaxed text-xl">
          Soy estudiante de tecnicatura en programacion y ademas un estudiante
          autodidacta y apasionado del desarrollo tanto{" "}
          <span className="font-libreBold">Front-end</span> como{" "}
          <span className="font-libreBold">Back-end</span>.
        </p>
      </div>
      <div className="tecnologias mt-5 ">
        <h1 className="text-3xl font-libreBold text-center">Tecnologias</h1>
        <div className="flex">
          <Image alt='' src={javaIco} height={100} width={100} ></Image>
          <Image alt='' src={springIco} height={100} width={100} ></Image>
          <Image alt='' src={springBootIco} height={100} width={100}  ></Image>
          <Image alt='' src={mySqlIco} height={100} width={100}  ></Image>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
