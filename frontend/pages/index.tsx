import Navbar from "@/components/Navbar";
import AlbumCarousel from '@/components/AlbumCarousel';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white flex flex-col items-center justify-center px-4">
        <div className="max-w-xl text-center">
        
        <AlbumCarousel />

          <h1 className="text-2xl md:text-2xl font-extrabold leading-snug tracking-wide uppercase mb-4">
          Relive the albums that moved you.
            <br />
            Log every beat you vibe with.
            <br />
            Celebrate music with your friends.
          </h1>

          <button className="mt-6 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-full text-sm shadow-lg transition">
            Start rating — it’s free.
          </button>

          {/* <div className="mt-4 text-xs text-gray-400">
            Also available on{' '}
            <span className="inline-block align-middle">
              <img
                src="/apple-store-icon.svg"
                alt="App Store"
                className="inline h-4 mx-1"
              />
              <img
                src="/google-play-icon.svg"
                alt="Google Play"
                className="inline h-4 mx-1"
              />
            </span>
          </div> */}
        </div>
      </main>
    </>
  );
}
