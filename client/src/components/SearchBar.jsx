import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeByName } from "../actions";

import s from './styles/SearchBar.module.css'

export default function SearchBar({ setCurrentPage}) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleInputChange (e) {
        e.preventDefault()
        setInput(e.target.value)
    }
    function handleSubmit (e) {
        e.preventDefault()
        dispatch(getPokeByName(input))
        setCurrentPage(1);
        e.target.reset()
    }
    return (
      <form className= {`${s.theForm}`} onSubmit={(e)=> handleSubmit(e)}>
        <input 
        onChange={(e)=>handleInputChange(e)}
        type="text" 
        placeholder="Find your pokemon"
        />
        <button type="submit" >
          <img src="/images/pokeballsinfondo.png" alt="pokeball" />
        </button>
      </form>
    );
}
