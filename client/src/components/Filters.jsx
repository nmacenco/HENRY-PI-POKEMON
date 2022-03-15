import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByOrigin,
  filterByTypes,
  filterByAscDesc,
  filterByStrength,
} from "../actions";

import s from "./styles/Filters.module.css";

export default function Filters({ setOrder, openFilters, setCurrentPage }) {
  const allTypes = useSelector((state) => state.types);
  const dispatch = useDispatch();

  function handleFilterOrigin(e) {
    e.preventDefault();
    dispatch(filterByOrigin(e.target.value));
    setCurrentPage(1);
    // setOrder(`Ordered ${e.target.value}`);
  }

  function handleFilterByTypes(e) {
    e.preventDefault();
    dispatch(filterByTypes(e.target.value));
    setCurrentPage(1);
    // setOrder(`Ordered ${e.target.value}`);
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

  return (
    <div className={openFilters ? `${s.filtersActive}` : `${s.filtersfalse}`}>
      <h2 className={ `${s.filtersTitle}` } >Filter them! </h2>

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
      <select defaultValue={"Atack"} onChange={(e) => handleFilterStrength(e)}>
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
  );
}
