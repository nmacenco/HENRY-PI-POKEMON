import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllPokemons,
  filterByAscDesc,
  filterByStrength,
  getAllTypes,
} from "../actions";

import Card from "./Card";
import Paged from "./Paged";
import Loading from "./Loading";
import Nav from "./Nav";
import Filters from "./Filters";

import s from "./styles/Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons); // lo mismo que hacer el mapstatetoProps
  const navigate = useNavigate();
  const pokeNotFound = useSelector((state) => state.pokeNotFound);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokesPerPage, setPokesPerPage] = useState(12);
  const lastPokeIndex = currentPage * pokesPerPage;
  const firstPokeIndex = lastPokeIndex - pokesPerPage;
  const pokesToRender = allPokemons.slice(firstPokeIndex, lastPokeIndex);
  const [order, setOrder] = useState("");
  const [openFilters , setOpenFilters] = useState(false)
  const paged = (pageNum) => {
    setCurrentPage(pageNum);
  };
  // useEffect(() => {
  //   dispatch(getAllPokemons()); // lo mismo que hacer mapdispatchtoprops
  //   dispatch(getAllTypes());
  // }, []);

  return (
    <div className={`${s.home}`}>
      <Nav 
        setCurrentPage = {setCurrentPage} 
        openFilters = {openFilters} 
        setOpenFilters = {setOpenFilters}>
      </Nav>

      <div className={`${s.filtersCardContainer}`}>
        <Filters
          openFilters = {openFilters} 
          setOrder = {setOrder}
          setCurrentPage = {setCurrentPage}
        ></Filters>

        <div  className={`${s.cardsPageContainer}`} >
          <div className={`${s.cards}`}>
            {pokeNotFound ? (
              navigate("/404")
            ) : pokesToRender.length > 0 ? (
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
              <Loading></Loading>
            )}
          </div>
          <div>
            <Paged
              allPokemons={allPokemons.length}
              pokesPerPage={pokesPerPage}
              paged={paged}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
