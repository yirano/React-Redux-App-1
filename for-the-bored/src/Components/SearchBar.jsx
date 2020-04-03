import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../Actions/actions";

const SearchBar = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.shortenURL(value));
    setValue("");
  };

  return (
    <div className="searchBarContainer">
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="search"
          value={value}
          onChange={e => handleChange(e)}
          placeholder="Shorten a link here"
        />
        <button>Shorten It!</button>
      </form>
    </div>
  );
};

export default SearchBar;

// https://twitter.com/search?q=%23secondwave&src=trend_click
