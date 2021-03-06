import axios from "axios";

export function getAllPokemons() {
  return async function (dispatch) {
    const info = await axios.get("/pokemons");
    return dispatch({
      type: "GET_ALL_POKEMONS",
      payload: info.data,
    });
  };
}
export function resetAllPokemons() {
  return {
    type: "RESET_ALL_POKEMONS",
    payload: [],
  };
}

export function getAllTypes() {
  return async function (dispatch) {
    const data = await axios.get("/types");
    return dispatch({
      type: "GET_ALL_TYPES",
      payload: data.data,
    });
  };
}

export function getPokeByName(payload) {
  return {
    type: "GET_POKE_BY_NAME",
    payload,
  };
}
export function getPokeById(id) {
  return async function (dispatch) {
    try {
      if (id.length > 9) {
        const elPoke = await axios.get(`/pokemons/${id}`);
        return dispatch({
          type: "GET_POKE_BY_ID",
          payload: elPoke.data,
        });
      } else {
        const elPoke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        return dispatch({
          type: "GET_POKE_BY_ID",
          payload: elPoke.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function deletePokeById() {
  return function (dispatch) {
    return dispatch({
      type: "DELETE_POKE_BY_ID",
      payload: {},
    });
  };
}
export function pokeNotFoundReset() {
  return {
    type: "POKE_NOT_FOUND_RESET",
    payload: false,
  };
}
export function createPoke(payload) {
  return async function () {
    const newPoke = await axios.post("/pokemons", payload);
    return newPoke;
  };
}
export function deletePoke(id) {
  return async function () {
    await axios.delete(`/pokemons/delete/${id}`);
    return {
      type: "DELETE_POKE",
      payload: "pokemon eliminado",
    };
  };
}

export function editPoke(poke, id) {
  return async function () {
    const updated = await axios.put(
      `/pokemons/edit/${id}`,
      poke
    );
    return {
      type: "UPDATE_POKE",
      payload: updated,
    };
  };
}

export function filterByOrigin(payload) {
  return {
    type: "FILTER_BY_ORIGIN",
    payload,
  };
}
export function filterByAscDesc(payload) {
  return {
    type: "FILTER_ASC_DESC",
    payload,
  };
}
export function filterByStrength(payload) {
  return {
    type: "FILTER_BY_STRENGTH",
    payload,
  };
}

export function filterByTypes(payload) {
  return {
    type: "FILTER_BY_TYPES",
    payload,
  };
}
