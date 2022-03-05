import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { createPoke, getAllTypes } from "../actions";
import { validate } from "../utils/formValidations";


export default function CreatePoke() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allTypes = useSelector((state) => state.types);


  const [input, setInput] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    img: '',
    types: [],
  });
  let [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  function handleOnChange(e) {
      e.preventDefault()
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors(
        validate({
            ...input,
            [e.target.name]: e.target.value,
        })
    );
    // console.log({ errors });
    // console.log({input : input});
}
function handleOnBlur(e) {
    console.log(input.name.length);
    // setErrors(
        //     validate({
            //         ...errors,
            //         [e.target.name]: e.target.value,
            //     })
            // );
}
            
  function handleSelectType(e) {
    e.preventDefault();
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }
  function handleSubmit(e) {
    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      alert("Todos los campos son requeridos");
    } else {
      dispatch(createPoke(input));
      alert("Pokemon creado con exito");
      console.log(input);
      e.target.reset();
      navigate("/home");
    }
  }
  function handleOnCLickType(e) {
    e.preventDefault();
    // console.log(input.types);
    // console.log(e.target.value);
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e.target.value),
    });
  }
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <h1>Creacion de pokemon</h1>

      <form onSubmit={(e) => handleSubmit(e)} >
        <label>Nombre</label>
        <input
          onChange={(e) => handleOnChange(e)}
        //   onBlur={(e) => handleOnBlur(e)}
          name={"name"}
          type="text"
          value={input.name}
          autoFocus
        />
        {errors.name && input.name.length < 1  ? <p>{errors.name}</p> : null}
        <br />
        <label>Vida</label>
        <input
        //   onBlur={(e) => handleOnBlur(e)}
          onChange={(e) => handleOnChange(e)}
          name={"hp"}
          type="number"
          value={input.hp}
        />
        {errors.hp ? <p>{errors.hp}</p> : null}
        <br />
        <label>Ataque</label>
        <input
          onChange={(e) => handleOnChange(e)}
          onBlur={(e) => handleOnBlur(e)}
          name={"attack"}
          type="number"
          value={input.attack}
        />
        {errors.attack   ? <p>{errors.attack}</p> : null}
        <br />
        <label>Defensa</label>
        <input
          onChange={(e) => handleOnChange(e)}
          onBlur={(e) => handleOnBlur(e)}
          name={"defense"}
          type="number"
          value={input.defense}
        />
        {errors.defense ? <p>{errors.defense}</p> : null}
        <br />
        <label>Velocidad</label>
        <input
          onChange={(e) => handleOnChange(e)}
          onBlur={(e) => handleOnBlur(e)}
          name={"speed"}
          type="number"
          value={input.speed}
        />
        {errors.speed ? <p>{errors.speed}</p> : null}
        <br />
        <label>Altura</label>
        <input
          onChange={(e) => handleOnChange(e)}
          onBlur={(e) => handleOnBlur(e)}
          name={"height"}
          type="number"
          value={input.height}
        />
        {errors.height  ? <p>{errors.height}</p> : null}
        <br />
        <label>Peso</label>
        <input
          onChange={(e) => handleOnChange(e)}
          onBlur={(e) => handleOnBlur(e)}
          name={"weight"}
          type="number"
          value={input.weight}
        />
        {errors.weight  ? <p>{errors.weight}</p> : null}
        <br />
        <label>Imagen</label>
        <input
          onChange={(e) => handleOnChange(e)}
          onBlur={(e) => handleOnBlur(e)}
          name={"img"}
          type="url"
          value={input.img}
        />
        {errors.img && input.img.length < 1 ? <p>{errors.img}</p> : null}
        <br />
        <label>Tipo</label>
        <select
          name={"types"}
          defaultValue={""}
          onChange={(e) => handleSelectType(e)}
        >
          <option disabled hidden>
            {""}
          </option>
          {allTypes &&
            allTypes.map((type) => {
              return (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              );
            })}
        </select>
        {input.types.length > 0 &&
          input.types.map((type, index) => {
            return (
              <ul>
                <li>
                  {type}
                  <button value={type} onClick={(e) => handleOnCLickType(e)}>
                    X
                  </button>
                </li>
              </ul>
            );
          })}
        <br />
        <br />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
