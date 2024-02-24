import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import logoAPP from "../../assets/images/Logo Pokemon.png";

const Landing = () => {
  return (
    <>
      <div className={style.container}>
        <img src={logoAPP} alt="Pokemon Icon" className={style.imag} />
        <h1 className={style.welcome}>Welcome to my PokeAPP</h1>
        <Link to={"/home"}>
          <button className={style.btn}>Begin</button>
        </Link>
      </div>
    </>
  );
};

export default Landing;
