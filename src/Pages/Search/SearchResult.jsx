import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import apiInstance from "../../../utils/axios";
import back from "../../assets/svgs/back.svg";
import Search from "./Search";
import { useAuth } from "../Context/AuthContext";
import { useSearch } from "../Context/SearchContext";
import { toast } from "react-toastify";
import { usePlayerSource } from "../Context/PlayerSourceContext";
import PlaySearchSong from "./PlaySearchSong";

const SearchResults = () => {
  const {
    setSelectedAlbum,
    isPlaying,
    setIsPlaying,
    setSelectedAlbumId,
    selectedAlbumId,
  } = useSearch();

  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 5;
  const [results, setResults] = useState(null);
  const { setSource } = usePlayerSource();
  console.log("results :", results);
  const [loading, setLoading] = useState(false);
  const { source } = usePlayerSource();
  const { isGoogleLogin, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      setLoading(true);
      async function fetchResults() {
        try {
          const response = await apiInstance.get(
            `/global-search?query=${query}&page=${page}&limit=${limit}`
          );
          console.log("response>>>>> :", response);
          setResults(response.data.results);
        } catch (error) {
          console.error("Error fetching search results:", error.message);
        } finally {
          setLoading(false);
        }
      }

      fetchResults();
    }
  }, [query, page, limit]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (!results) return <p className="text-white">Not Found</p>;

  const { artists, albums, playlists, songs, genres } = results;

  const handleAlbum = (albumId) => {
    navigate(`/album/${albumId}`);
  };

  const handleArtist = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  const handleSong = (song) => {
    if (!isGoogleLogin && !isLoggedIn) {
      toast.warn("Please log in to play music");
    }

    if (!song?.cloudinaryUrl) {
      toast.warn("This song has no playback audio");
      return;
    }
    setSelectedAlbum(song);
    console.log("song :", song);
    setSelectedAlbumId(0);
    setSource("searchsong");
    setIsPlaying(true);
  };

  const handlePlayList = (playlist) => {
    if (!playlist.cloudinaryUrl) {
      toast.warn("This song has no playback audio");
      return;
    }
  };

  const handleGenre = (genre) => {
    if (!genre?.cloudinaryUrl) {
      toast.warn("This song has no playback audio");
      return;
    }
  };

  return (
    <div className="px-4 py-6 space-y-8">
      <div>
        <Search />
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <div>
          <img
            src={back}
            alt="bck"
            onClick={() => navigate("/searchlist")}
            className="w-10 h-8"
          />
        </div>
        <div>
          <p
            className="text-[29px] font-Vazirmatn-600
       bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text"
          >
            Search Results
          </p>
        </div>
      </div>
      <p
        className="text-[40px] font-Vazirmatn-600
       bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text lg:block hidden"
      >
        Search Results
      </p>
      {artists?.length > 0 && (
        <div>
          <h3 className="text-[22px] font-Vazirmatn-600 text-white mb-2">
            Artists
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {artists.map((artist) => (
              <div
                key={artist._id}
                className="bg-gray-800 p-4 rounded w-[248px] h-fit"
                onClick={() => handleArtist(artist._id)}
              >
                <img
                  src={artist.artistImage?.[0]}
                  alt={artist.name}
                  className="w-full h-38 rounded mb-2"
                />
                <h4 className="text-[20px] text-white font-Vazirmatn-400">
                  {artist.name}
                </h4>
                <p className="text-[17px] font-Vazirmatn-300 text-gray-400">
                  {artist.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {albums?.length > 0 && (
        <div>
          <h3 className="text-[22px] font-Vazirmatn-600 text-white mb-2">
            Albums
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {albums.map((album, index) => (
              <div
                key={album._id || index}
                className="bg-gray-800 p-4 rounded  w-[248px] h-fit"
                onClick={() => handleAlbum(album._id)}
              >
                <img
                  src={album.albumImages?.[0]}
                  alt={album.title}
                  className="w-full h-38 rounded mb-2"
                />
                <h4 className="text-[20px] text-white font-Vazirmatn-400">
                  {album.title}
                </h4>
                <p className="text-[17px] font-Vazirmatn-300 text-gray-400">
                  Released: {new Date(album.releaseDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {songs?.length > 0 && (
        <div>
          <h3 className="text-[22px] font-Vazirmatn-600 text-white mb-2">
            Songs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {songs.map((song) => (
              <div
                key={song._id}
                className="bg-gray-800 p-4 rounded w-[248px] h-fit"
                onClick={() => handleSong(song)}
              >
                <img
                  src={song?.songImage}
                  alt={song?.title}
                  className="w-full h-38"
                />
                <p className="text-[17px] font-Vazirmatn-300 py-2 text-white">
                  {song.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {playlists?.length > 0 && (
        <div>
          <h3 className="text-[22px] font-Vazirmatn-600 text-white mb-2">
            Playlist
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {playlists.map((playlist) => (
              <div
                key={playlist._id}
                className="bg-gray-800 p-2 rounded w-fit h-fit"
                onClick={() => handlePlayList(playlist)}
              >
                <img src={playlist?.playlistImage} alt={playlist?.title} />

                <p className="text-[17px] font-Vazirmatn-300 text-white py-2">
                  {playlist.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {genres?.length > 0 && (
        <div>
          <h3 className="text-[22px] font-Vazirmatn-600 text-white mb-2">
            Genres
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {genres.map((genre) => (
              <div
                key={genre._id}
                className="bg-gray-800 p-2 rounded w-fit h-fit"
                onClick={() => handleGenre(genre)}
              >
                <img src={genre?.genreImage} alt={genre?.name} />
                <p className="text-[17px] font-Vazirmatn-300 text-white py-2">
                  {genre.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {[artists, albums, playlists, songs, genres].every(
        (list) => !list?.length
      ) && <p className="text-white">No results found.</p>}

      {(isLoggedIn || isGoogleLogin) && (
        <div className="fixed bottom-7 left-0 right-0 z-40  bg-[#252525] rounded-md  border-t border-gray-700 lg:hidden">
          {source === "searchsong" && <PlaySearchSong />}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
