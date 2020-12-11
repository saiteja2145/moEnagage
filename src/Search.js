import React from "react";

const Search = ({ search, setSearchHandler }) => {
  return (
    <input
      value={search}
      onChange={setSearchHandler}
      className="search__box"
      placeholder="Search Here"
    ></input>
  );
};

export default Search;
