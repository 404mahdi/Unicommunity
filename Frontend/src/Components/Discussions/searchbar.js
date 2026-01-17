import { IoSearchCircleSharp } from "react-icons/io5";
import React, { useState } from "react";
import { config } from "../../config";
import "./searchbar.css";

const SearchBar = ({ setResults, input, setInput }) => {
  //const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`${config.endpoints.courses}/getall`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((json) => {
        // Ensure json is an array before filtering
        if (Array.isArray(json)) {
          const results = json.filter((course) => {
            return (
              value &&
              course.course_code.toLowerCase().includes(value.toLowerCase())
            );
          });
          setResults(results);
        } else {
          console.error("Expected array but got:", json);
          setResults([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setResults([]);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search-bar" title="Search">
      <IoSearchCircleSharp className="search-icon" />
      <input
        title="Search"
        placeholder="e.g. CSE471"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
