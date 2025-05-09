import AlbumCarousel from "@/components/home/AlbumCarousel";
import Button from "@/components/ui/Button"; // NUEVO

export default function MainScreen() {
  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-7">
      <div className="max-w-xl text-center mt-12">
        <AlbumCarousel />

        <h1 className="text-2xl md:text-2xl font-extrabold leading-snug tracking-wide uppercase mb-4">
          Relive the albums that moved you.
          <br />
          Log every beat you vibe with.
          <br />
          Celebrate music with your friends.
        </h1>

        <Button className="mt-6 text-sm rounded-full shadow-lg">
          Start rating — it’s free.
        </Button>
      </div>
    </section>
  );
}
// Compare this snippet from frontend/components/AlbumCarousel.tsx: