import React, { useState } from "react";
import "./SearchDemo.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchDemo({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div className="search">
      <div className="search-input">
        <input type="text" placeholder={placeholder} />
        <div className="search-icon">
          <SearchIcon />
        </div>
      </div>
      {
        <div className="dataResult">
          {data.map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
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
