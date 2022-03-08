import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  filterByOrigin,
  filterByAscDesc,
  filterByStrength,
  getAllTypes,
  filterByTypes,
} from "../actions";
import { Link } from "react-router-dom";

import Card from "./Card";
import Paged from "./Paged";
import SearchBar from "./SearchBar";
import s from "./styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons); // lo mismo que hacer el mapstatetoProps
  const allTypes = useSelector((state) => state.types);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokesPerPage, setPokesPerPage] = useState(12);
  const lastPokeIndex = currentPage * pokesPerPage;
  const firstPokeIndex = lastPokeIndex - pokesPerPage;
  const pokesToRender = allPokemons.slice(firstPokeIndex, lastPokeIndex);
  const [order, setOrder] = useState("");
  const paginado = (pageNum) => {
    setCurrentPage(pageNum);
  };
  useEffect(() => {
    dispatch(getAllPokemons()); // lo mismo que hacer mapdispatchtoprops
    dispatch(getAllTypes());
  }, []);

  function handleClick(e) {
    // e.preventDefault();
    dispatch(getAllPokemons());
  }

  function handleFilterOrigin(e) {
    e.preventDefault();
    dispatch(filterByOrigin(e.target.value));
  }
  function handleFilterAscDesc(e) {
    e.preventDefault();
    dispatch(filterByAscDesc(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  }

  function handleFilterStrength(e) {
    e.preventDefault();
    dispatch(filterByStrength(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  }
  function handleFilterByTypes(e) {
    e.preventDefault();
    dispatch(filterByTypes(e.target.value));
    console.log(e.target.value);
  }
  return (
    <div className={`${s.home}`}>
      <nav>
        <div className={`${s.searchbar}`}>
          <SearchBar></SearchBar>
        </div>
        <div className={`${s.aboutCreate}`}>
          <Link className={`${s.about}`} to="/about">
            {" "}
            About Me{" "}
          </Link>
          <Link className={`${s.create}`} to="/createPoke">
            {" "}
            Create Pokemon{" "}
          </Link>
          <button className={`${s.reload}`} onClick={(e) => handleClick(e)}>
            Reload Pokes
          </button>
        </div>
      </nav>
      <div className={`${s.filters}`}>
        <select
          defaultValue={"Alfabetic order"}
          onChange={(e) => handleFilterAscDesc(e)}
        >
          <option disabled hidden>
            Alfabetic order
          </option>
          <option value="asc">Ascendent</option>
          <option value="desc">Descendent</option>
        </select>
        <select
          defaultValue={"Atack"}
          onChange={(e) => handleFilterStrength(e)}
        >
          <option disabled hidden>
            Atack
          </option>
          <option value="strong">More</option>
          <option value="weak">Less</option>
        </select>
        <select defaultValue={"Type"} onChange={(e) => handleFilterByTypes(e)}>
          <option disabled hidden>
            {" "}
            Type{" "}
          </option>
          {allTypes &&
            allTypes.map((type) => {
              return (
                <option key={type.id} value={`${type.name}`}>
                  {type.name}
                </option>
              );
            })}
        </select>
        <select defaultValue={"Origin"} onChange={(e) => handleFilterOrigin(e)}>
          <option disabled hidden>
            {" "}
            Origin{" "}
          </option>
          <option value="all">All</option>
          <option value={"created"}>Created</option>
          <option value={"api"}>From Api</option>
        </select>
      </div>
      <div>
        <Paged
          allPokemons={allPokemons.length}
          pokesPerPage={pokesPerPage}
          paginado={paginado}
        />
      </div>

      <div className={`${s.cards}`}>
        {pokesToRender.length > 0 ? (
          pokesToRender.map((poke) => {
            return (
              <Card
                key={poke.id}
                id={poke.id}
                name={poke.name}
                img={poke.img}
                types={poke.types}
              />
            );
          })
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    </div>
  );
}
