import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ cardsXPage, totalCards, currentPage, onPageChange }) => {
  // Calcula y divide el numero de paginas por la cantidad de cards a mostrar
  const totalPages = Math.ceil(totalCards / cardsXPage);

  // Paginas a mostrar en la Barra
  const maxPagesToShow = 5;

  // Me muestra un array con los numeros de paginas
  const getPageNumbers = () => {
    if (totalPages <= maxPagesToShow) {
      // Comprueba el numero de paginas maximo permitido , muestra todas las páginas
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      // Si hay más páginas que el máximo permitido, calcula qué páginas mostrar

      const pages = [];
      const midPoint = Math.ceil(maxPagesToShow / 2);

      if (currentPage <= midPoint) {
        // Si la página actual está en la primera mitad, muestra las primeras páginas
        for (let i = 1; i <= maxPagesToShow; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - midPoint) {
        // Si la página actual está en la última mitad, muestra las últimas páginas
        for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Si la página actual está en el medio, muestra un rango alrededor de la página actual
        const start = currentPage - Math.floor(maxPagesToShow / 2);
        const end = currentPage + Math.floor(maxPagesToShow / 2);

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      }

      return pages;
    }
  };

  return (
    <div className={style.ctnBody}>
      {/* Con este boton voy a la primera paggina */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`${style.btn} ${currentPage === 1 ? style.selected : ""}`}>
        {"<<"}
      </button>

      {/* Btn para la página anterior */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${style.btn} ${currentPage === 1 ? style.selected : ""}`}>
        {"<"}
      </button>

      {/* Mapea y muestra los numeros de paginas */}
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {/* Agrega puntos suspensivos entre páginas no consecutivas */}
          {index > 0 && page !== getPageNumbers()[index - 1] + 1 && (
            <span>...</span>
          )}

          {/* Btn para ir a una página específica */}
          <button
            onClick={() => onPageChange(page)}
            disabled={currentPage === page}
            className={`${style.btn} ${
              currentPage === page ? style.selected : ""
            }`}>
            {page}
          </button>
        </React.Fragment>
      ))}

      {/* Btn para ir a la página siguiente */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${style.btn} ${
          currentPage === totalPages ? style.selected : ""
        }`}>
        {">"}
      </button>

      {/* Btn para ir a la última página */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`${style.btn} ${
          currentPage === totalPages ? style.selected : ""
        }`}>
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
