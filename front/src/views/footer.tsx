import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700">&copy; {new Date().getFullYear()} Ecommerce. Todos los derechos reservados.</p>
        <p className="text-gray-700">Contacto: contacto@ecommerce.com</p>

        <div className="flex justify-center space-x-6 mt-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-blue-600 transition">Facebook</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-blue-400 transition">Twitter</span>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-pink-600 transition">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
