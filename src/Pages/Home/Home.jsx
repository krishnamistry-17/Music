import React from "react";
import Albums from "../Albums/Albums";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen overflow-y-auto">
      <div>
        <Albums />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
