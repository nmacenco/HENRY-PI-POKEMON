const { Pokemon, Type } = require("../db");
const axios = require("axios");

const getPokesFromApi = async () => {
  try {
    const callingApi = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=40"
    );
  
    const promeses = callingApi.data.results.map((element) => {
      return axios.get(element.url);
    });
    const arrayPokes = await Promise.all(promeses).then((pokearray) => {
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
          createdInDataBase: false,
        };
      });
      return pokeArray;
    });
    return arrayPokes;
  } catch (error) {
      console.log(error);
  }

};

const getPokesFromDB = async () => {
  try {
    const pokes = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return pokes;
  } catch (error) {
    console.log(error);
  }

};

const allPokes = async () => {
  try {
    const pokesFromApi = await getPokesFromApi();
    const pokesFromDB = await getPokesFromDB();
    return pokesFromApi.concat(pokesFromDB);
  } catch (error) {
    console.log(error);
  }

};

const getPokeByID = async (id) => {
  try {
    const poke = await Pokemon.findByPk(id, {
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return poke;
  } catch (error) {
    console.log(error);
  }

};

module.exports = {
  allPokes,
  getPokesFromDB,
  getPokeByID,
};
