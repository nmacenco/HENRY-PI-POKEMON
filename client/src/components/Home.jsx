import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons , filterByOrigin, filterByAscDesc,filterByStrength ,getAllTypes , filterByTypes } from "../actions";
import { Link } from "react-router-dom";

import Card from "./Card";
import Paged from "./Paged";
import SearchBar from "./SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons); // lo mismo que hacer el mapstatetoProps
  const allTypes =  useSelector(state => state.types)
  const [currentPage, setCurrentPage] = useState(1);
  const [pokesPerPage, setPokesPerPage] = useState(12);
  const lastPokeIndex = currentPage * pokesPerPage;
  const firstPokeIndex = lastPokeIndex - pokesPerPage;
  const pokesToRender = allPokemons.slice(firstPokeIndex, lastPokeIndex);
  const [order , setOrder ] = useState('')
const paginado = (pageNum) => {
    setCurrentPage(pageNum)
}
  useEffect(() => {
    dispatch(getAllPokemons()); // lo mismo que hacer mapdispatchtoprops
    dispatch(getAllTypes())
 
  }, []);

  

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAllPokemons());
  }

  function handleFilterOrigin(e) {
    e.preventDefault();
    dispatch(filterByOrigin(e.target.value));
  }
  function handleFilterAscDesc(e) {
    e.preventDefault();
    dispatch(filterByAscDesc(e.target.value));
    setCurrentPage(1) ;
    setOrder(`Ordered ${e.target.value}`)
  }

  function handleFilterStrength (e) {
    e.preventDefault();
    dispatch(filterByStrength(e.target.value));
    setCurrentPage(1) ;
    setOrder(`Ordered ${e.target.value}`)
  }
  function handleFilterByTypes (e) {
    e.preventDefault();
    dispatch(filterByTypes(e.target.value)) ;
    console.log(e.target.value);
  }
  return (
    <div>
      <nav>
        <Link to="/createPoke"> Crear Pokemon </Link>
        <h1>Pagina de los Poke</h1>
        <button onClick={(e) => handleClick(e)}>Reload Pokes</button>
        <SearchBar></SearchBar>
      </nav>
      <div>
        <select defaultValue={'Orden alfabetico'} onChange={(e) =>handleFilterAscDesc(e)}>
          <option disabled  hidden  > Orden alfabetico </option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select  defaultValue={'Ataque'} onChange={(e)=> handleFilterStrength(e) } >

          <option disabled  hidden > Ataque </option>
          <option value="strong">Mayor fuerza</option>
          <option value="weak">Menor fuerza</option>
        </select>
        <select defaultValue={'Tipo'} onChange={(e)=>handleFilterByTypes(e)}>
          <option disabled  hidden  > Tipo </option>
          {
            allTypes && 
            allTypes.map(type => {
              return (
                <option key={type.id} value={`${type.name}`}>{type.name}</option>
              )
            })
          }
        </select>
        <select defaultValue={'Origen'} onChange={(e) =>handleFilterOrigin(e)}>
          <option disabled  hidden  > Origen </option>
          <option value="all">Todos</option>
          <option value={'created'}>Creados</option>
          <option value={'api'}>De la api </option>
        </select>
      </div>
      <div>
        <Paged
          allPokemons={allPokemons.length}
          pokesPerPage={pokesPerPage}
          paginado={paginado}
        />
      </div>

      <div>
                {    
                     
                     pokesToRender.length > 0 ? 
                     pokesToRender.map( poke => {
                        return (
                            <Card key={poke.id} id={poke.id} name = {poke.name} img ={poke.img} types={poke.types} />

                        )
                    }) :
                    <h1>Cargando...</h1>
                }
            </div>
    </div>
  );
}
