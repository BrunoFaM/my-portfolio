import Link from "next/link";
import NavButton from "./NavButton";
function Navigation() {
  return (
    <>
      <NavButton  />
      <nav className="hidden sm:block text-xl  w-[400px] font-libreBold">
        <ul className="flex gap-2  justify-between">
          <Link className="hover:underline" href="/about">Sobre mi</Link>
          <Link className="hover:underline" href="/works">Projectos</Link>
          <Link className="hover:underline " href="/contact">Contacto</Link>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
