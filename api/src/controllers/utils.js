const { Pokemon, Type } = require("../db");
const axios = require("axios");

const getPokesFromApi = async () => {
  const callingApi = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  // console.log(callingApi.data.results);

  const promeses = callingApi.data.results.map((element) => {
    return axios.get(element.url);
  });   
  const arrayPokes = await Promise.all(promeses).then((pokearray) => {
    // pokearray.forEach(el => console.log({el : el.data.name}))
    const pokeArray = pokearray.map((element) => {
      return {
        id: element.data.id,
        name: element.data.name,
        hp: element.data.stats[0].base_stat,
        attack: element.data.stats[1].base_stat,
        defense: element.data.stats[2].base_stat,
        speed: element.data.stats[5].base_stat,
        height: element.data.height,
        weight: element.data.weight,
        types: element.data.types.map((element) => element.type),
        img: element.data.sprites.other.home.front_default,
        // createdInDataBase: 'false',
        createdInDataBase: false,
      };
    });
    // console.log(pokeArray);
    return pokeArray;
  });
  // console.log(arrayPokes);
  return arrayPokes;
};

const getPokesFromDB = async () => {
  const pokes = await Pokemon.findAll({
    //   include: Type,
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return pokes;
};

const allPokes = async () => {
  const pokesFromApi = await getPokesFromApi();
  const pokesFromDB = await getPokesFromDB();
  return pokesFromApi.concat(pokesFromDB);
};

module.exports = {
  allPokes,
};
