import UserAuth from "./userAuth";

export default function Navbar() {
  return (
    <nav className="bg-background shadow-md">
      <div className="flex items-center justify-between px-2 py-1">
        <span className="font-bold text-2xl font-sans text-colorPrimario">Ecommerce Novapple</span>
        <UserAuth /> 
      </div>
    </nav>
  );
}