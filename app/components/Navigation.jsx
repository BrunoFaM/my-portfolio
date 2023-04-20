import Link from "next/link";
function Navigation() {
  return (
    <nav>
      <ul>
        <Link href="/about">Sobre mi</Link>
        <Link href="/works">Projectos</Link>
        <Link href="/contact">Contacto</Link>
      </ul>
    </nav>
  );
}

export default Navigation;
