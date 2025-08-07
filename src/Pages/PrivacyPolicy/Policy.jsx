import React, { useEffect, useState } from "react";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";

const Policy = () => {
  const [data, setData] = useState([]);
  console.log("data :", data);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.warn("No token found, skipping API call");
        setError("Unauthorized: Please login first");
        setLoading(false);
        return;
      }
      try {
        const response = await apiInstance.get(apiRoutes.GET_PRIVACY);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="text-white">
      <div>
        <p
          className="bg-gradient-to-t from-darkblue to-darkpink text-transparent bg-clip-text
        text-[32px] font-Vazirmatn-600
        "
        >
          Privacy Policy
        </p>
        <div className=" container">
          <div dangerouslySetInnerHTML={{ __html: data }}></div>
        </div>
      </div>
    </div>
  );
};
export default Policy;
