import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./Cards.module.css";

const Cards = ({ pokemons, currentPage, setCurrentPage }) => {
  const cardsXPage = 12;
  const [currentPokemons, setCurrentPokemons] = useState([]);

  useEffect(() => {
    const indexOfLastCard = currentPage * cardsXPage;
    const indexOfFirstCard = indexOfLastCard - cardsXPage;
    const currentPokemonsSlice = pokemons.slice(
      indexOfFirstCard,
      indexOfLastCard
    );
    setCurrentPokemons(currentPokemonsSlice);
  }, [currentPage, pokemons]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={style.ctnBody}>
        {currentPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        cardsXPage={cardsXPage}
        totalCards={pokemons.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Cards;
