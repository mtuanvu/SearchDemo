import React, { useState } from "react";
import "./SearchDemo.css";
import { Search } from "@mui/icons-material";

function SearchDemo({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  const search = (str) => {
    const result = data.filter((value) => {
      return value.title.toLowerCase().includes(str.toLowerCase());
    });
    setFilteredData(result);
  };
  return (
    <div className="search">
      <div className="search-input">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            if (e.target.value === "") {
              setFilteredData([]);
            } else {
              search(e.target.value);
            }
          }}
        />
        <div className="search-icon">
          <Search />
        </div>
      </div>
      {
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a
                className="dataItem"
                href={value.link}
                target="_blank"
                rel="noreferrer"
              >
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      }
    </div>
  );
}

export default SearchDemo;
