import AlbumCarousel from "@/components/AlbumCarousel";

export default function MainScreen() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white flex flex-col items-center justify-center px-4">
      <div className="max-w-xl text-center mt-12">
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
      </div>
    </section>
  );
}
