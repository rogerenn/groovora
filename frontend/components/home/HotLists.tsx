import { useEffect, useState } from "react";
import { fetchAlbums } from '@/services/SpotifyApi'; // NUEVO

interface Album {
  id: string;
  name: string;
  artist: string;
  image: string;
  url: string;
}

interface HotList {
  id: string;
  title: string;
  albumCovers: string[]; // URLs
}

export default function HotLists() {
  const [hotLists, setHotLists] = useState<HotList[]>([]);

  useEffect(() => {
    fetchAlbums()
      .then((albums) => {
        const grouped: HotList[] = [];
        for (let i = 0; i < albums.length; i += 4) {
          const slice = albums.slice(i, i + 4);
          if (slice.length === 4) {
            grouped.push({
              id: `list-${i}`,
              title: `Hot List #${i / 4 + 1}`,
              albumCovers: slice.map((a: Album) => a.image)
            });
          }
        }
        setHotLists(grouped);
      })
      .catch((err) => console.error('Error fetching albums:', err));
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-xl">HOT LISTS</h2>
        <a href="#" className="text-white font-bold text-md hover:text-pink-500">MORE</a>
      </div>

      <div className="flex flex-col gap-6">
        {hotLists.map((list) => (
          <div key={list.id} className="flex flex-col items-center">
            <div className="relative w-[208px] h-28 overflow-visible">
              {list.albumCovers.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`cover-${idx}`}
                  className="absolute h-full object-cover rounded-md shadow-md transition-transform hover:scale-105"
                  style={{
                    left: `${idx * 48}px`,        // Overlap con separación parcial
                    zIndex: 10 - idx,             // Las primeras encima
                    width: "80px",                // Ancho manual para superposición
                  }}
                />
              ))}
            </div>
            <h3 className="text-white font-semibold mt-3 text-center">{list.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
