// import React, { useEffect, useState } from "react";
// import apiInstance from "../../../utils/axios";
// import { apiRoutes } from "../Component/Constants/apiRoutes";

// const Policy = () => {
//   const [data, setData] = useState([]);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const token = localStorage.getItem("accessToken");
//       if (!token) {
//         console.warn("No token found, skipping API call");
//         setError("Unauthorized: Please login first");
//         setLoading(false);
//         return;
//       }
//       try {
//         const response = await apiInstance.get(apiRoutes.GET_PRIVACY);
//         setData(response.data.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="text-white">
//       <div>
//         <p
//           className="bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text
//         text-[32px] font-Vazirmatn-600
//         "
//         >
//           Privacy Policy
//         </p>
//         <div className=" container">
//           <div dangerouslySetInnerHTML={{ __html: data }}></div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Policy;

import React from "react";
import back from "../../assets/svgs/back.svg";
import { useNavigate } from "react-router-dom";
const Policy = () => {
  const navigate = useNavigate();
  return (
    <div className="py-12 px-6 ">
      <div className="max-w-[896px]">
        <div className="flex items-center gap-4 lg:hidden mb-6">
          <div>
            <img src={back} alt="back" onClick={() => navigate("/")} />
          </div>
          <div>
            <h2
              className="text-[31px] font-Vazirmatn-700  
                bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text
                "
            >
              {" "}
              Privacy Policy
            </h2>
          </div>
        </div>
        <h1
          className="text-[40px]  bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text lg:block hidden
        font-Vazirmatn-700 mb-6"
        >
          Privacy Policy
        </h1>

        <p className="mb-4 text-[18px] font-Vazirmatn-400 text-white">
          At{" "}
          <strong className=" bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text">
            Melodies
          </strong>
          , your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our music
          streaming platform.
        </p>

        <h2 className="text-[24px] font-Vazirmatn-600 text-white mt-6 mb-2">
          <span className="pr-2">🔍</span> Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2 text-[18px] font-Vazirmatn-400 text-white">
          <li>
            <strong>Personal Information:</strong> Name, email, profile photo
            (for account creation).
          </li>
          <li>
            <strong>Usage Data:</strong> Playlists, liked songs, listening
            activity.
          </li>
          <li>
            <strong>Device & Log Info:</strong> IP address, browser type,
            timestamps, etc.
          </li>
        </ul>

        <h2 className="text-[24px] font-Vazirmatn-600 text-white mt-6 mb-2">
          <span className="pr-2">🛠️</span> How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-[18px] font-Vazirmatn-400 text-white">
          <li>Personalize and improve your listening experience</li>
          <li>Communicate updates and offers (only if you opt-in)</li>
          <li>Ensure platform security and performance</li>
        </ul>

        <h2 className="text-[24px] font-Vazirmatn-600 text-white mt-6 mb-2">
          <span className="pr-2">🔒</span> Data Security
        </h2>
        <p className="text-[18px] font-Vazirmatn-400 text-white mb-4">
          We use modern security practices to protect your data. While no system
          is entirely secure, we strive to keep your information safe.
        </p>

        <h2 className="text-[24px] font-Vazirmatn-600 text-white mt-6 mb-2">
          <span className="pr-2">👥 </span>Sharing Your Data
        </h2>
        <p className="text-[18px] font-Vazirmatn-400 text-white mb-4">
          We <strong>do not sell</strong> or rent your personal data. We may
          share data with trusted third-party services or when legally required.
        </p>

        <h2 className="text-[24px] font-Vazirmatn-600 text-white mt-6 mb-2">
          <span className="pr-2"> 🧒</span> Children's Privacy
        </h2>
        <p className="text-[18px] font-Vazirmatn-400 text-white mb-4">
          Our platform is not intended for users under 13. We do not knowingly
          collect data from children.
        </p>

        <h2 className="text-[24px] font-Vazirmatn-600 text-white mt-6 mb-2">
          <span className="pr-2">⚙️ </span>Your Choices
        </h2>
        <ul className="list-disc list-inside space-y-2 text-[18px] font-Vazirmatn-400 text-white">
          <li>Update or delete your profile anytime</li>
          <li>Disable cookies in browser settings</li>
          <li>Request data access or deletion via contact</li>
        </ul>

        <h2 className="text-[24px] font-Vazirmatn-600 text-white mt-6 mb-2">
          <span className="pr-2">📬</span> Contact Us
        </h2>
        <p className="text-[18px] font-Vazirmatn-400 text-white">
          If you have any questions about this Privacy Policy, feel free to
          contact us at:
          <br />
          <span className="text-darkblue font-Vazirmatn-500 text-[18px]">
            support@melodies.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default Policy;
