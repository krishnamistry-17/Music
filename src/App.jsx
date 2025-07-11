import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Artist from "./Pages/Artist/Artist";
import Albums from "./Pages/Albums/Albums";
import Discover from "./Pages/Discover/Discover";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/album" element={<Albums />} />
            <Route path="/discover" element={<Discover />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
