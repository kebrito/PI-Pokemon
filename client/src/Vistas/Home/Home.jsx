import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByOrigin,
  filterByType,
  getPokemons,
  getTypes,
  orderByName,
  orderByAtk,
} from "../../redux/actions/actions";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);

  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(1); // Nuevo estado para almacenar la página actual antes de aplicar el filtro

  const handleFilterByType = (event) => {
    setCurrentPage(1); // Restablecer la página actual al aplicar el filtro
    dispatch(filterByType(event.target.value));
  };

  const handleFilterByOrigin = (event) => {
    setCurrentPage(1); // Restablecer la página actual al aplicar el filtro
    dispatch(filterByOrigin(event.target.value));
  };

  const handleOrderByName = (event) => {
    dispatch(orderByName(event.target.value));
  };

  const handleOrderByAtk = (event) => {
    dispatch(orderByAtk(event.target.value));
  };

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemons());
    }
  }, []);

  useEffect(() => {
    if (types.length === 0) {
      dispatch(getTypes());
    }
  }, []);

  const resetPokemons = () => {
    if (pokemons.length < 151) {
      dispatch(getPokemons());
    } else {
      alert("All pokemon loaded!");
    }
  };

  return (
    <div className={style.ctnBody}>
      <div className={style.selectContainer}>
        <div className={style.filters}>
          <h3>FILTERS:</h3>
          <select
            onChange={handleFilterByType}
            defaultValue={"ByType"}
            className={style.select}>
            <option value="ByType" disabled="disabled">
              By Type
            </option>
            <option value="All">All</option>
            {types?.map((t) => (
              <option key={t.name} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
          <select
            onChange={handleFilterByOrigin}
            defaultValue={"ByOrigin"}
            className={style.select}>
            <option value="ByOrigin" disabled="disabled">
              By Origin
            </option>
            <option value="All">All</option>
            <option value="API">Api</option>
            <option value="DATABASE">Database</option>
          </select>
        </div>
        <h3>SORTS:</h3>
        <div className={style.Ssorts}>
          <select
            onChange={handleOrderByName}
            defaultValue={"ByName"}
            className={style.select}>
            <option value="ByName" disabled="disabled">
              By Name
            </option>
            <option value="ASC">Ascendente</option>
            <option value="DES">Descendiente</option>
          </select>
          <select
            onChange={handleOrderByAtk}
            defaultValue={"ByATK"}
            className={style.select}>
            <option value="ByATK" disabled="disabled">
              By ATK
            </option>
            <option value="ASC">Ascendente</option>
            <option value="DES">Descendiente</option>
          </select>
        </div>
      </div>

      <button onClick={resetPokemons} className={style.btn}>
        All Pokemons
      </button>
      <Cards
        pokemons={pokemons}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} // Pasar la función para actualizar la página actual al componente Cards
        previousPage={previousPage} // Pasar la página anterior al componente Cards
      />
    </div>
  );
};

export default Home;
