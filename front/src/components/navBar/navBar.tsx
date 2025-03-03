import Link from "next/link";
import UserAuth from "./userAuth";

export default function Navbar() {
  return (
    <nav className="bg-background shadow-md">
      <div className="flex items-center justify-between px-2 py-1">
        <span>Logo</span>
        <UserAuth />
      </div>
      <div className="bg-colorPrimario">
        <ul className="flex px-8 py-2">
          <li>
            <Link href="/" className="text-colorSecundario hover:text-opacity-80 transition">
              Productos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

