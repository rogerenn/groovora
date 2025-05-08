import Navbar from "@/components/Navbar";
import MainScreen from "@/components/MainScreen";
import HomeFeatures from "@/components/HomeFeatures";
import PopularThisWeek from "@/components/PopularThisWeek";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-purple-900 to-black text-white min-h-screen">
      <div className="bg-gradient-to-br from-purple-900 to-black text-white">
        <MainScreen />
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <HomeFeatures />
        </section>
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <PopularThisWeek />
        </section>
      </div>
      </main>
    </>
  );
}
