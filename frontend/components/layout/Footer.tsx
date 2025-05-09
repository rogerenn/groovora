import {
    FaInstagram,
    FaLink,
    FaXTwitter,
    FaFacebook,
    FaTiktok,
    FaYoutube,
  } from "react-icons/fa6";
  
  export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 text-sm mt-10 border-t-4 border-purple-600">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Top navigation */}
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex flex-wrap gap-4 text-white font-medium text-sm">
              <a href="#">About</a>
              <a href="#">Pro</a>
              <a href="#">News</a>
              <a href="#">Apps</a>
              <a href="#">Podcast</a>
              <a href="#">Year in Review</a>
              <a href="#">Gifts</a>
              <a href="#">Help</a>
              <a href="#">Terms</a>
              <a href="#">API</a>
              <a href="#">Contact</a>
            </div>
  
            <div className="flex gap-4 text-gray-400 text-xl">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLink /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTiktok /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
  
          {/* Legal / credit line */}
          <div className="text-xs">
            © Letterboxd Limited. Made by <a href="#" className="text-blue-400">fans</a> in Aotearoa New Zealand.{" "}
            <a href="#" className="text-blue-400">Film data</a> from{" "}
            <a href="#" className="text-blue-400">TMDB</a>.{" "}
            <a href="#" className="text-blue-400">Mobile site</a>.
          </div>
        </div>
      </footer>
    );
  }
  