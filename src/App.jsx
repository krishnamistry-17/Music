import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Artist from "./Pages/Artist/Artist";
import Albums from "./Pages/Albums/Albums";
import Discover from "./Pages/Discover/Discover";
import Footer from "./Pages/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import HomeNav from "./Pages/Home/HomeNav";
import { AuthProvider, useAuth } from "./Pages/Context/AuthContext";
import LoginSmall from "./Pages/Home/LoginSmall";
import SignUpSmall from "./Pages/Home/SignUpSmall";
import Favorites from "./Pages/Favorites/Favorites";
import { SongProvider } from "./Pages/Context/SongContext";
import { FavProvider } from "./Pages/Context/FavContext";
import SideBar from "./Pages/SideBar/SideBar";
import AudioMusic from "./Pages/Home/AudioMusic";
import AlbumPlay from "./Pages/Albums/AlbumPlay";
import useIsLargeScreen from "./Pages/Context/useIsLargeScreen";
import { AlbumProvider } from "./Pages/Context/AlbumContext";
import Song from "./Pages/Albums/Song";
import DisPlay from "./Pages/Discover/DisPlay";
import { GenereProvider, useGenere } from "./Pages/Context/GenereContext";
import ForgetPassword from "./Pages/Home/ForgetPassword";
import {
  PlayerSourceProvider,
  usePlayerSource,
} from "./Pages/Context/PlayerSourceContext";
import { MoodProvider } from "./Pages/Context/MoodContext";
import Playmood from "./Pages/Discover/Playmood";
import ResetPassword from "./Pages/Home/ResetPassword";
import { ArtistProvider } from "./Pages/Context/ArtistContext";
import PlayArtist from "./Pages/Artist/PlayArtist";
import { ViewProvider } from "./Pages/Context/ViewContext";
import ViewSongs from "./Pages/Discover/ViewSongs";
import Setting from "./Pages/Setting/Setting";
import UserDetail from "./Pages/Home/UserDetail";
import Faq from "./Pages/FAQ/Faq";
import { FaqProvider } from "./Pages/Context/FaqContext";

function LayoutWrapper({ children }) {
  const location = useLocation();

  const { isLoggedIn, isGoogleLogin } = useAuth();
  const { source } = usePlayerSource();

  const showHomeNav = ["/discover"].includes(location.pathname);

  const showAudio = (isLoggedIn || isGoogleLogin) && location.pathname === "/";

  const showOtherMusic =
    (isLoggedIn || isGoogleLogin) &&
    (location.pathname === "/album" || location.pathname.startsWith("/album/"));

  const showOtherMusic1 =
    (isLoggedIn || isGoogleLogin) &&
    (location.pathname === "/artist" ||
      location.pathname.startsWith("/artist/"));

  const showDisplay =
    (isGoogleLogin || isLoggedIn) && location.pathname === "/discover";

  const hasBottomPlayer =
    showAudio || showDisplay || showOtherMusic || showOtherMusic1;

  return (
    <>
      <div className="lg:flex hidden min-h-screen">
        {/* Sidebar (scrollable with padding at bottom) */}
        <SideBar hasBottomPlayer={hasBottomPlayer} />

        {/* Right side: content + HomeNav + Footer */}
        <div className="flex-1 flex flex-col relative ml-[300px] pt-[64px]">
          <div>
            {showHomeNav && <HomeNav />}
            {children}
          </div>
          {/* Fixed audio players (only on desktop) */}
          {showAudio && (
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#181818] border-t border-gray-700">
              <AudioMusic />
            </div>
          )}

          {showOtherMusic && (
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#181818] border-t border-gray-700">
              <AlbumPlay />
            </div>
          )}

          {showDisplay && (
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#181818] border-t border-gray-700">
              {source === "newrelease" && <AudioMusic />}
              {source === "musicgeners" && <DisPlay />}
              {source === "moodplay" && <Playmood />}
            </div>
          )}

          {showOtherMusic1 && (
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#181818] border-t border-gray-700">
              {source === "popular" && <PlayArtist />}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function App() {
  const isLarge = useIsLargeScreen();

  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <AuthProvider>
          <AlbumProvider>
            <ArtistProvider>
              <SongProvider>
                <GenereProvider>
                  <MoodProvider>
                    <FavProvider>
                      <PlayerSourceProvider>
                        <ViewProvider>
                          <FaqProvider>
                            {isLarge ? (
                              <LayoutWrapper>
                                <Routes>
                                  <Route path="/" element={<Home />} />
                                  <Route
                                    path="/discover"
                                    element={<Discover />}
                                  />
                                  <Route
                                    path="/album"
                                    element={<Albums album={Song} />}
                                  />
                                  <Route
                                    path="/album/:id"
                                    element={<Albums />}
                                  />
                                  <Route path="/artist" element={<Artist />} />
                                  <Route
                                    path="/artist/:id"
                                    element={<Artist />}
                                  />
                                  {/* <Route
                              path="/reset-password"
                              element={<ResetPassword />}
                            /> */}
                                  <Route
                                    path="/reset-password"
                                    element={<ResetPassword />}
                                  />
                                  <Route
                                    path="/login"
                                    element={<LoginSmall />}
                                  />
                                  <Route
                                    path="/signup"
                                    element={<SignUpSmall />}
                                  />
                                  <Route
                                    path="/forgotpassword"
                                    element={<ForgetPassword />}
                                  />
                                  <Route
                                    path="/favorites"
                                    element={<Favorites />}
                                  />
                                  <Route
                                    path="/viewsong"
                                    element={<ViewSongs />}
                                  />
                                  <Route
                                    path="/setting"
                                    element={<Setting />}
                                  />
                                  <Route
                                    path="/userdetail"
                                    element={<UserDetail />}
                                  />
                                  <Route path="/faq" element={<Faq />} />
                                </Routes>
                              </LayoutWrapper>
                            ) : (
                              <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                  path="/discover"
                                  element={<Discover />}
                                />
                                <Route path="/album" element={<Albums />} />{" "}
                                <Route path="/album/:id" element={<Albums />} />{" "}
                                <Route path="/artist" element={<Artist />} />
                                <Route
                                  path="/artist/:id"
                                  element={<Artist />}
                                />
                                <Route path="/login" element={<LoginSmall />} />
                                <Route
                                  path="/signup"
                                  element={<SignUpSmall />}
                                />
                                <Route
                                  path="/forgotpassword"
                                  element={<ForgetPassword />}
                                />
                                <Route
                                  path="/favorites"
                                  element={<Favorites />}
                                />
                                <Route
                                  path="/viewsong"
                                  element={<ViewSongs />}
                                />
                                <Route path="/setting" element={<Setting />} />
                                <Route
                                  path="/userdetail"
                                  element={<UserDetail />}
                                />
                                <Route path="/faq" element={<Faq />} />
                              </Routes>
                            )}
                            <ToastContainer />
                            {isLarge && <Footer />}
                          </FaqProvider>
                        </ViewProvider>
                      </PlayerSourceProvider>
                    </FavProvider>
                  </MoodProvider>
                </GenereProvider>
              </SongProvider>
            </ArtistProvider>
          </AlbumProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
