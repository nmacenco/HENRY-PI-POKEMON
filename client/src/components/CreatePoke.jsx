import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { createPoke, getAllTypes,filterByOrigin , getAllPokemons} from "../actions";
import { validate } from "../utils/formValidations";

import s from "./styles/CreatePoke.module.css";
// import pikachuImg from './images/pikachucel.png'
// import pikachuImg from '../../public/images/pikachucel.png'

export default function CreatePoke() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allTypes = useSelector((state) => state.types);

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: [],
  });
  let [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  function handleOnChange(e) {
    e.preventDefault();
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log({input : input});
  }
  function handleOnBlur(e) {
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    // console.log({ errors });
    // console.log((e.target.value));
  }

  function handleSelectType(e) {
    e.preventDefault();
    if (input.types.length < 2) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
    } else {
      alert("Se pueden seleccionar como maximo 2 tipos de pokemon");
    }
  }
  function handleSubmit(e) {
    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      alert("Todos los campos son requeridos");
    } else {
      dispatch(createPoke(input));
      alert("Pokemon creado con exito");
      // console.log(input);
      // dispatch(filterByOrigin('all'));
      e.target.reset();
      dispatch(getAllPokemons());
      navigate("/home");
    }
  }
  function handleOnCLickType(e) {
    e.preventDefault();
    // console.log(errors);
    // console.log(e.target.value);
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e.target.value),
    });
  }
  function handleClick(e){
    dispatch(filterByOrigin('all'));
  }
  return (
    <div className={`${s.create}`}>
      <div className={`${s.card}`}>
        <div className={`${s.nameHomeContainer}`}>
          <NavLink onClick={(e)=> {handleClick(e)}} className={`${s.homeButton}`} to="/home">
            Home
          </NavLink>
          <h1>Create your pokemon</h1>
        </div>
        <div className={`${s.imgFormContainer}`}>
          <div className={`${s.pikaImg}`}>
            <img src={"/images/pikachucel.png"} alt="" />
          </div>
          <form className={`${s.form}`} onSubmit={(e) => handleSubmit(e)}>
            <div className={`${s.eachStat}`}>
              <label>Name</label>
              <input
                className={errors.name ? `${s.inputError}` : `${s.inputOk}`}
                onChange={(e) => handleOnChange(e)}
                onBlur={(e) => handleOnBlur(e)}
                name={"name"}
                type="text"
                value={input.name}
                autoFocus
              />
            </div>
            <div className={`${s.eachStat}`}>
              {errors.name ? (
                <p className={`${s.danger}`}>{errors.name}</p>
              ) : null}
            </div>
            <div className={`${s.eachStat}`}>
              <label>Hp</label>
              <input
                className={ errors.hp ? `${s.inputError}` : input.hp > 1 ?`${s.inputOk}` : null}
                onBlur={(e) => handleOnBlur(e)}
                onChange={(e) => handleOnChange(e)}
                name={"hp"}
                type="number"
                value={input.hp}
              />
            </div>
            <div className={`${s.errorBox}`}>
              {errors.hp ? <p className={`${s.danger}`}>{errors.hp}</p> : null}
            </div>
            <div className={`${s.eachStat}`}>
              <label>Attack</label>
              <input
                className={ errors.attack ? `${s.inputError}` : input.attack > 1 ?`${s.inputOk}` : null}
                onChange={(e) => handleOnChange(e)}
                onBlur={(e) => handleOnBlur(e)}
                name={"attack"}
                type="number"
                value={input.attack}
              />
            </div>
            <div className={`${s.errorBox}`}>
              {errors.attack ? (
                <p className={`${s.danger}`}>{errors.attack}</p>
              ) : null}
            </div>
            <div className={`${s.eachStat}`}>
              <label>Defense</label>
              <input
                className={ errors.defense ? `${s.inputError}` : input.defense > 1 ?`${s.inputOk}` : null}
                onChange={(e) => handleOnChange(e)}
                onBlur={(e) => handleOnBlur(e)}
                name={"defense"}
                type="number"
                value={input.defense}
              />
            </div>
            <div className={`${s.errorBox}`}>
              {errors.defense ? (
                <p className={`${s.danger}`}>{errors.defense}</p>
              ) : null}
            </div>
            <div className={`${s.eachStat}`}>
              <label>Speed</label>
              <input
                className={ errors.speed ? `${s.inputError}` : input.speed > 1 ?`${s.inputOk}` : null}
                onChange={(e) => handleOnChange(e)}
                onBlur={(e) => handleOnBlur(e)}
                name={"speed"}
                type="number"
                value={input.speed}
              />
            </div>
            <div className={`${s.errorBox}`}>
              {errors.speed ? (
                <p className={`${s.danger}`}>{errors.speed}</p>
              ) : null}
            </div>
            <div className={`${s.eachStat}`}>
              <label>Height</label>
              <input
                className={ errors.height ? `${s.inputError}` : input.height > 1 ?`${s.inputOk}` : null}
                onChange={(e) => handleOnChange(e)}
                onBlur={(e) => handleOnBlur(e)}
                name={"height"}
                type="number"
                value={input.height}
              />
            </div>
            <div className={`${s.errorBox}`}>
              {errors.height ? (
                <p className={`${s.danger}`}>{errors.height}</p>
              ) : null}
            </div>
            <div className={`${s.eachStat}`}>
              <label>Weight</label>
              <input
                className={ errors.weight ? `${s.inputError}` : input.weight > 1 ?`${s.inputOk}` : null}
                onChange={(e) => handleOnChange(e)}
                onBlur={(e) => handleOnBlur(e)}
                name={"weight"}
                type="number"
                value={input.weight}
              />
            </div>
            <div className={`${s.errorBox}`}>
              {errors.weight ? (
                <p className={`${s.danger}`}>{errors.weight}</p>
              ) : null}
            </div>
            <div className={`${s.eachStat}`}>
              <label>Image</label>
              <input
                className={ errors.img ? `${s.inputError}` : input.img > 1 ?`${s.inputOk}` : null}
                onChange={(e) => handleOnChange(e)}
                onBlur={(e) => handleOnBlur(e)}
                name={"img"}
                type="url"
                value={input.img}
              />
            </div>
            <div className={`${s.errorBox}`}>
              {errors.img ? (
                <p className={`${s.danger}`}>{errors.img}</p>
              ) : null}
            </div>
            <div className={`${s.eachStat}`}>
              <label>Type</label>
              <select
                id= {`${s.types}`}  
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
            </div>
            <div className={`${s.typeContainer}`}>
              {input.types.length > 0 &&
                input.types.map((type, index) => {
                  return (
                    <div key={index}>
                      {type}
                      <button
                        className={`${s.typeButton}`}
                        key={index}
                        value={type}
                        onClick={(e) => handleOnCLickType(e)}
                      >
                        x
                      </button>
                    </div>
                  );
                })}
            </div>

            <button className={`${s.createButton}`} type="submit">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
