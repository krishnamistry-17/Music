import { useState } from "react";
import MusicGeners from "./MusicGeners";
import NewRelease from "./NewRelease";
import MoodPlay from "./MoodPlay";
import PopArtist from "./PopArtist";
import MusicVideo from "./MusicVideo";
import TopAlbums from "./TopAlbums";

const DisContent = () => {
  const [activeTab, setActiveTab] = useState("musicGenres");
  const [inputvalue, setInputValue] = useState("");

  // Optional: handle input change if you want a search or filter input
  // const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="flex gap-4 p-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "musicGenres" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("musicGenres")}
        >
          Music Genres
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "newReleases" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("newReleases")}
        >
          New Releases
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "moodPlay" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("moodPlay")}
        >
          Mood Play
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "popArtist" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("popArtist")}
        >
          Pop Artist
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "musicVideo" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("musicVideo")}
        >
          Music Video
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "topAlbums" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("topAlbums")}
        >
          Top Albums
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="pt-[17px] pl-[34px] pr-[64px]">
        {activeTab === "musicGenres" && <MusicGeners searchQuery={inputvalue} />}
        {activeTab === "newReleases" && <NewRelease searchQuery={inputvalue} />}
        {activeTab === "moodPlay" && <MoodPlay searchQuery={inputvalue} />}
        {activeTab === "popArtist" && <PopArtist searchQuery={inputvalue} />}
        {activeTab === "musicVideo" && <MusicVideo searchQuery={inputvalue} />}
        {activeTab === "topAlbums" && <TopAlbums searchQuery={inputvalue} />}
      </div>
    </div>
  );
};

export default DisContent;
