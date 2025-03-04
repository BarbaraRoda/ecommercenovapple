"use client";
import Link from "next/link";
import UserAuth from "./userAuth";
import { useAuth } from "@/context/authContext";

export default function Navbar() {
  const { isAuth } = useAuth();

  return (
    <nav className="bg-background shadow-md">
      <div className="flex items-center justify-between px-2 py-1">
        <span className="font-bold text-xl">Ecommerce</span>
        <UserAuth />
      </div>

      <div className="bg-colorPrimario">
        <ul className="flex px-8 py-2">
          {isAuth && (
            <li>
              <Link href="/home" className="text-colorSecundario hover:text-opacity-80 transition">
                Productos
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

