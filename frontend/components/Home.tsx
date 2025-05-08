import AlbumCarousel from '@/components/AlbumCarousel';
import HomeFeatures from '@/components/HomeFeatures';
import PopularThisWeek from '@/components/PopularThisWeek';

export default function Home() {
  return (
    <>
      <AlbumCarousel />
      <HomeFeatures />
      <PopularThisWeek />
    </>
  );
}
