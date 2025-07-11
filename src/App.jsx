import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Artist from "./Pages/Artist/Artist";
import Albums from "./Pages/Albums/Albums";
import Discover from "./Pages/Discover/Discover";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/album" element={<Albums />} />
            <Route path="/artist" element={<Artist />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
