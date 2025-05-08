export default function Navbar() {
  return (
    <nav className="bg-white text-black px-6 py-4 flex justify-between items-center shadow">
      <div className="text-xl font-bold">groovora</div>

      <div className="flex items-center space-x-6">
        <a href="#" className="hover:text-gray-600 text-sm font-medium">ABOUT US</a>
        <a href="#" className="hover:text-gray-600 text-sm font-medium">MUSIC</a>
        <a href="#" className="hover:text-gray-600 text-sm font-medium">BLOG</a>
        <a href="#" className="hover:text-gray-600 text-sm font-medium">LISTS</a>

        <input
          type="text"
          placeholder="🔍"
          className="px-2 py-1 border rounded-md text-sm"
        />

        <button className="px-4 py-1 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition">
          LOG IN
        </button>
        <button className="px-4 py-1 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition">
          SIGN UP
        </button>
      </div>
    </nav>
  );
}
