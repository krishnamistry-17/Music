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

// function LayoutWrapper({ children }) {
//   const location = useLocation();

//   // const showBg = location.pathname === "/"; // Show Bg only on home
//   const showHomeNav = ["/", "/discover"].includes(location.pathname); // Show HomeNav on both

//   return (
//     <>
//       {/* {showBg && <Bg />} */}
//       {showHomeNav && <HomeNav />}
//       {children}
//     </>
//   );
// }
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          {/* <LayoutWrapper> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/album" element={<Albums />} />
            <Route path="/artist" element={<Artist />} />
          </Routes>
          {/* </LayoutWrapper> */}
          <ToastContainer />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
