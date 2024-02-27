import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ pokemon }) => {
  const { id, name, image, types, hp } = pokemon;

  return (
    <div className={style.ctnBody}>
      <h2 className={style.name}>{name}</h2>
      <Link to={`/detail/${id}`}>
        <br />
        <img src={image} alt="Pokemon Picture" className={style.imag} />
      </Link>

      {types.map((type) => {
        return (
          <h3 key={type} className={style.type}>
            {type}
          </h3>
        );
      })}
    </div>
  );
};

export default Card;
