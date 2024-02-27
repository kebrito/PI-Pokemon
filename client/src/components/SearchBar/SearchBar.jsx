import { useState } from "react";
import style from "./SearchBar.module.css";
import searchIcon from "../../assets/images/Search-icon.png";

const SearchBar = ({ onSearch }) => {
  const [searchPokemon, setSearchPokemon] = useState("");

  const handleInputChange = (e) => {
    setSearchPokemon(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchPokemon);
    setSearchPokemon("");
  };

  return (
    <div className={style.ctnBody}>
      <div className={style.inptContainer}>
        <input
          type="text"
          placeholder="Find Pokemon Name"
          value={searchPokemon}
          onChange={handleInputChange}
          className={style.input}
        />
        <img
          src={searchIcon}
          alt="search-icon"
          onClick={handleSearch}
          className={style.imag}
        />
      </div>
    </div>
  );
};

export default SearchBar;
