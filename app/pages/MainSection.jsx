import React from "react";
import ChangePageIcon from "../components/ChangePageIcon";

function MainSection() {
  return (
    <section className="h-screen w-screen  mt-20 lg:mt-32 ">
      <div className="mt-0 mb-0 ml-0 min-w-fit max-w-[430px] sm:max-w-[580px] md:max-w-[700px] md:m-auto lg:max-w-[1200px] ">
        <h1 className="text-5xl sm:text-6xl md:text-7xl md:p-3 lg:text-9xl  p-2 text-gray-300  flex flex-col">
          <hr className=" border-none" />
          <span>PROGRAMADOR</span>
          <hr className=" border-none" />
          <span className="self-end ">WEB</span>
        </h1>
      </div>
      {/*<ChangePageIcon direction={"right"} url={"/about"} hacia={"sobre mi"} />*/}
      <p className="absolute bottom-3 pl-1">@2023</p>
    </section>
  );
}

export default MainSection;
