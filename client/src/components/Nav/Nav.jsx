import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Nav = ({ onSearch }) => {
  const location = useLocation();

  return (
    <div>
      <header className={style.ctnBody}>
        <Link to={"/"}>
          <button className={style.btn}>Landing</button>
        </Link>
        <Link to={"/home"}>
          <button className={style.btn}>Home</button>
        </Link>
        <Link to={"/form"}>
          <button className={style.btn}>Create</button>
        </Link>
        {location.pathname === "/home" && <SearchBar onSearch={onSearch} />}
      </header>
    </div>
  );
};

export default Nav;
