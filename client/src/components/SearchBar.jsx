import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeByName } from "../actions";
export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleInputChange (e) {
      e.preventDefault()
      setInput(e.target.value)
  }
  function handleSubmit (e) {
      e.preventDefault()
      dispatch(getPokeByName(input))
      e.target.reset()
  }
  return (
    <form onSubmit={(e)=> handleSubmit(e)}>
      <input 
      onChange={(e)=>handleInputChange(e)}
      type="text" 
      placeholder="Buscar Pokemon"
      />
      <button type="submit" >Buscar pokemon</button>
    </form>
  );
}
