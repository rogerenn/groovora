import { useEffect, useState } from "react";
import { fetchAlbums } from '@/services/SpotifyApi'; // NUEVO

interface Album {
  id: string;
  name: string;
  artist: string;
  image: string;
  url: string;
  release_date?: string; // si decides incluirlo
}

export default function TrendingReviews() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetchAlbums()
      .then(setAlbums)
      .catch((err) => console.error('Error fetching albums:', err));
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-xl">TRENDING REVIEWS THIS WEEK</h2>
        <a href="#" className="text-white font-bold text-md hover:text-pink-500">MORE</a>
      </div>

      {albums.map((album, index) => (
        <div key={album.id} className="flex mb-8 border-b border-gray-600 pb-4">
          <img
            src={album.image}
            alt={album.name}
            className="w-28 h-28 object-cover rounded-lg mr-4"
          />
          <div>
            <h3 className="text-white font-bold text-md">
              {album.name}{" "}
              <span className="font-normal text-gray-400">
                {album.release_date?.slice(0, 4) || 2024}
              </span>
            </h3>
            <div className="flex items-center gap-2 text-sm text-white mt-1">
              <span role="img" aria-label="basketball">🏀</span>
              <span className="font-bold">papummusical</span>
              <span className="text-green-400">★★★★★</span>
              <span className="text-orange-400">💛</span>
              <span className="text-gray-400">💬 72</span>
            </div>
            <p className="text-sm text-white mt-1">
              {album.artist} está bien rico tu álbum
            </p>
            <p className="text-sm text-gray-400 mt-1">💙 26,250 likes</p>
          </div>
        </div>
      ))}
    </div>
  );
}
