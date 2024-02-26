import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form" action="">
        <div className="field">
          <label htmlFor="">Search for a Video</label>
          <input onChange={(e) => setTerm(e.target.value)} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
