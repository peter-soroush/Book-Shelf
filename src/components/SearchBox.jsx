import { IoSearchSharp } from "react-icons/io5";

import React from "react";

import style from "./SearchBox.module.css";
function SearchBox({ search, setSearch, searchHandeler }) {
  return (
    <div className={style.searchBox}>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />

      <button onClick={searchHandeler}>
        <IoSearchSharp />
      </button>
    </div>
  );
}

export default SearchBox;
