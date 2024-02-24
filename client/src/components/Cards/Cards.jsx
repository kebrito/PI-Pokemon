import { useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./Cards.module.css";

const Cards = ({ pokemons }) => {
  const cardsXPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsXPage;
  const indexOfFirstCard = indexOfLastCard - cardsXPage;
  const currentPokemons = pokemons?.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={style.ctnBody}>
        {currentPokemons?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        cardsXPage={cardsXPage}
        totalCards={pokemons?.length || 0}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Cards;
