import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByOrigin,
  filterByTypes,
} from "../actions";

import s from "./styles/Filters.module.css";

export default function Filters ({openFilters,handleFilterAscDesc,handleFilterStrength}) {
// export default function Filters () {
    const allTypes = useSelector((state) => state.types);
    const dispatch = useDispatch();



    function handleFilterOrigin(e) {
        e.preventDefault();
        dispatch(filterByOrigin(e.target.value));
      }

      function handleFilterByTypes(e) {
        e.preventDefault();
        dispatch(filterByTypes(e.target.value));
        console.log(openFilters);

      }

    return (
        <div  className={openFilters  ? `${s.filtersActive}` : `${s.filtersfalse}`} >
        {/* <div  className={`${s.filterTitle}`} > */}
          <h2>Filter them! </h2>

        {/* </div> */}
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
    )
}