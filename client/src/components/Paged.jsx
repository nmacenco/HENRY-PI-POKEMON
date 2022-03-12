import React from "react";

import s from "./styles/Paged.module.css";

export default function Paged({ allPokemons, pokesPerPage, paged }) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(allPokemons / pokesPerPage) + 1; i++) {
    pageNumbers.push(i);
  }

  function handleClick (num) {
    paged(num)

  }
  return (
    <React.Fragment>

      <ul className={`${s.paged}`}>
        {pageNumbers &&
          pageNumbers.map((num) => {
            return (
              <li key={num}>
                        
                    <button value={num} onClick={() => handleClick(num)}>{num}</button>
                   {/* <img src="/images/pokeballsinfondo.png" alt="pokeball" />  */}
              </li>
            );
          })}
      </ul>
    </React.Fragment>
  );
}
