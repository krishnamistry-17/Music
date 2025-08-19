import React from "react";
import back from "../../assets/svgs/back.svg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="py-12 px-6  text-gray-800">
      <div className="max-w-[896px]">
        <div className="flex items-center gap-4 lg:hidden mb-6">
          <div>
            <img src={back} alt="back" onClick={() => navigate("/")} />
          </div>
          <div>
            <h2
              className="text-[40px] font-Vazirmatn-700  
        bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text
        "
            >
              About Us
            </h2>
          </div>
        </div>
        <h2
          className="text-[40px] font-Vazirmatn-700  lg:block hidden
        bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text
        mb-6"
        >
          About Us
        </h2>

        <p className="mb-4 lg:text-[18px] text-[16.5px] text-white font-Vazirmatn-400">
          Welcome to{" "}
          <span
            className="font-Vazirmatn-600  
          bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text"
          >
            Melodies
          </span>{" "}
          – your ultimate destination for music streaming!
        </p>

        <p className="mb-4 lg:text-[18px] text-[16.5px] font-Vazirmatn-400 text-white">
          At Melodies, we believe in the power of music to move, inspire, and
          connect people. Whether you're into pop, classical, rock, jazz, or
          indie beats, our player is designed to give you a seamless, immersive
          listening experience.
        </p>

        <h3 className="text-[24px] font-Vazirmatn-600 text-white mt-8 mb-4">
          🎧 What We Offer:
        </h3>
        <ul className="list-disc list-inside space-y-2 lg:text-[18px] text-[16.5px] font-Vazirmatn-400 text-white">
          <li>A clean, intuitive user interface</li>
          <li>High-quality audio playback</li>
          <li>Custom playlists and smart recommendations</li>
          <li>Regular updates with the latest tracks</li>
        </ul>

        <p className="mt-6 lg:text-[18px] text-[16.5px] font-Vazirmatn-400 text-white">
          We're passionate music lovers and tech enthusiasts working together to
          create a platform where music speaks louder than words.
        </p>

        <p className="mt-4 lg:text-[18px] text-[16.5px] font-Vazirmatn-500 text-white">
          Thanks for choosing{" "}
          <span
            className="font-Vazirmatn-600  
          bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text"
          >
            Melodies
          </span>{" "}
          – let's vibe together!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
