import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Artist from "./Pages/Artist/Artist";
import Albums from "./Pages/Albums/Albums";
import Discover from "./Pages/Discover/Discover";
import Footer from "./Pages/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Bg from "./Pages/Home/Bg";
import HomeNav from "./Pages/Home/HomeNav";
import { AuthProvider } from "./Pages/Context/AuthContext";
import LoginSmall from "./Pages/Home/LoginSmall";
import SignUpSmall from "./Pages/Home/SignUpSmall";
import Login from "./Pages/Home/Login";
import SignUp from "./Pages/Home/SignUp";
import Favorites from "./Pages/Favorites/Favorites";
import { SongProvider } from "./Pages/Context/SongContext";

function LayoutWrapper({ children }) {
  const location = useLocation();

  const showHomeNav = ["/discover"].includes(location.pathname);

  return (
    <>
      <div className="lg:ml-[300px] lg:pt-[64px] pl-[50px] pr-[89px]">
        {showHomeNav && <HomeNav />}
      </div>
      {children}
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <AuthProvider>
          <SongProvider>
            <LayoutWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/album" element={<Albums />} />
                <Route path="/artist" element={<Artist />} />
                <Route path="/login" element={<LoginSmall />} />
                <Route path="/signup" element={<SignUpSmall />} />
                <Route path="/favorites" element={<Favorites />} />
              </Routes>
            </LayoutWrapper>
            <ToastContainer />
            <Footer />
          </SongProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
