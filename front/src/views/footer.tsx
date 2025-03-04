import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-fondo text-texto py-6 px-4 md:px-8 mt-auto w-full">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Ecommerce. Todos los derechos reservados.</p>
        <p className="text-sm md:text-base">Contacto: contacto@ecommerce.com</p>

        <div className="flex justify-center space-x-6 mt-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl md:text-2xl hover:text-blue-600 transition" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl md:text-2xl hover:text-blue-400 transition" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl md:text-2xl hover:text-pink-600 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
