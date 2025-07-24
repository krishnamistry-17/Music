import { useEffect, useState } from "react";
import apiInstance from "../../../utils/axios";

const useFetchData = ({ endpoint, onSuccess, onError, dependencies = [] }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

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
        const response = await apiInstance.get(endpoint);
        const result = response.data.data;
        setData(result);
        onSuccess && onSuccess(result);
      } catch (err) {
        setError(err);
        onError && onError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, dependencies);

  return { data, loading, error };
};

export default useFetchData;
