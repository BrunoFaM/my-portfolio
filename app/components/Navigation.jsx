import Link from "next/link";
import NavButton from "./NavButton";
function Navigation() {
  return (
    <>
      <NavButton />
      <nav className="hidden">
        <ul>
          <Link href="/about">Sobre mi</Link>
          <Link href="/works">Projectos</Link>
          <Link href="/contact">Contacto</Link>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
