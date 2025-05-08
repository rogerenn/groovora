import { FaHeadphones, FaListUl, FaClock, FaSave, FaChartBar, FaPen } from 'react-icons/fa';

const features = [
  {
    icon: <FaHeadphones />,
    text: "Add songs directly to your streaming service, so everything you love is just one tap away",
  },
  {
    icon: <FaClock />,
    text: "Keep track of all the music you've listened to (or just start from the day you join)",
  },
  {
    icon: <FaPen />,
    text: "Write reviews and rate music to share your opinions with friends and the Groovora community",
  },
  {
    icon: <FaListUl />,
    text: "Create custom lists — from your all-time favorite albums to ranked discographies and vibe-specific playlists",
  },
  {
    icon: <FaSave />,
    text: "Save albums you haven’t heard yet and stay in the loop as new releases drop",
  },
  {
    icon: <FaChartBar />,
    text: "Unlock deep insights into your listening habits with Groovora Pro: stats, graphs, comparisons and more",
  },
];

export default function HomeFeatures() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">Groovora lets you...</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-purple-800 bg-opacity-70 rounded-xl p-5 flex items-start space-x-4 shadow-md hover:shadow-lg transition"
            >
              <div className="text-yellow-300 text-xl mt-1">{feature.icon}</div>
              <p className="text-sm text-white leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
