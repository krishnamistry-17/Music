import React, { useEffect, useState } from "react";
import apiInstance from "../../../utils/axios";
import { apiRoutes } from "../Component/Constants/apiRoutes";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SearchList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  console.log("query :", query);

  const [results, setResults] = useState([]);
  console.log("results :", results);

  useEffect(() => {
    if (query) {
      async function fetchResults() {
        try {
          const response = await apiInstance.get(
            `auth/global-search?query=${query}&page=1&limit=5`
          );
          setResults(response.data);
        } catch (error) {
          console.log(error.message);
        }
      }
      fetchResults();
    }
  }, [query]);

  return (
    <div className="text-white">
      <p>search for:{query}</p>
      <div>
        {results.map((item, index) => (
          <div key={index}>{item?.title}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchList;
