import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-colorFondo text-colorTexto px-6 text-center">
      <h1 className="text-6xl font-bold text-colorPrimario">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">Página no encontrada</h2>
      <p className="my-4 text-lg text-texto">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link href="/">
        <span className="mt-6 px-6 py-3 bg-colorPrimario text-white text-lg rounded-lg shadow-md hover:bg-colorSecundario transition">
          Volver al inicio
        </span>
      </Link>
    </div>
  );
}
