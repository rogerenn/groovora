import Navbar from "@/components/layout/Navbar";
import MainScreen from "@/components/home/MainScreen";
import HomeFeatures from "@/components/home/HomeFeatures";
import PopularThisWeek from "@/components/home/PopularThisWeek";
import TrendingReviews from "@/components/home/TrendingReviews";
import HotLists from "@/components/home/HotLists";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-[#1c0f30] to-purple-900 text-white flex-1">
        <div className="max-w-6xl mx-auto px-4">
          <MainScreen />
          <section className="py-0">
            <HomeFeatures />
          </section>
          <section className="py-0">
            <PopularThisWeek />
          </section>
          <section className="py-0">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* 3/4 width */}
              <div className="lg:w-3/4 w-full">
                <TrendingReviews />
              </div>
              {/* 1/4 width */}
              <div className="lg:w-1/4 w-full">
                <HotLists />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
