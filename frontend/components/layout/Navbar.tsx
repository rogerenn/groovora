import Search from "../ui/Search";
import Button from "../ui/Button";

export default function Navbar() {
  const handleSearch = (query: string) => {
    console.log("Buscando:", query);
    // Puedes redirigir, filtrar resultados o mostrar sugerencias
  };

  return (
    <nav className="bg-[#faf6f0] text-black px-6 md:px-20 py-2 flex flex-col md:flex-row md:justify-between md:items-center shadow gap-4 md:gap-0">
      <div className="text-2xl font-bold">groovora</div>

      <div className="flex flex-col md:flex-row items-center md:space-x-6 gap-2 md:gap-0">
        <a href="#" className="hover:text-pink-600 font-bold">ABOUT US</a>
        <a href="#" className="hover:text-pink-600 font-bold">MUSIC</a>
        <a href="#" className="hover:text-pink-600 font-bold">BLOG</a>
        <a href="#" className="hover:text-pink-600 font-bold">LISTS</a>
        
        <Search onSearch={handleSearch} className="w-full md:w-auto" />
        <Button>SIGN IN</Button>
        <Button>LOG IN</Button>
      </div>
    </nav>
  );
}
