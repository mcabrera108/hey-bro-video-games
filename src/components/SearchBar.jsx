import React from "react";
import style from "../style_modules/component_module/searchbar.module.css";
import { useState } from "react";

function SearchBar(props) {

    return (
        <input className={style.searchBarContainer}
            placeholder="Search..."
            onChange={props.handleSearchUpdate}
            value={props.searchInput}
            type="text">
        </input>
    )
}
export default SearchBar;