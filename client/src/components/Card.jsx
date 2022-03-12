import React from "react";
import { Link } from "react-router-dom";
import s from "./styles/Card.module.css";
export default function Card({ id, img, name, types }) {
  return (
    <div className={`${s.card}`}>
      <div className={`${s.cardName}`}>
        <Link className={`${s.name}`} to={`/detail/${id}`}>
          {name.toUpperCase()}
          {/* {name} */}
        </Link>
        <div className={`${s.types}`}>
          {
          types && types.map((type, index) => (
            <h5 key={index} value = {type.name} className={`${s.type}`} >{type.name}</h5>
          ))
          }
        </div>
      </div>
      <img src={img} alt="" className={`${s.cardImg}`} />
    </div>
  );
}
