import ChangePageIcon from "./components/ChangePageIcon";

export default function Home() {
  return (
    <main className="h-full w-screen  mt-20 ">
      <h1 className="text-6xl p-6 text-gray-300">
        <hr className=" border-none" />
        <span>PROGRAMADOR</span>
        <hr className=" border-none" />
        <span className="float-right">WEB</span>
      </h1>
      <ChangePageIcon  direction={"right"} url={"/about"} hacia={"sobre mi"} />
      <p className="absolute bottom-3 pl-1">@2023</p>
    </main>
  );
}
