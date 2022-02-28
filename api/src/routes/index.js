const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Pokemon, Type } = require("../db");

const axios = require("axios");
const router = Router();

const getPokesFromApi = async () => {
  const callingApi = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  // console.log(callingApi.data.results);

  const promeses = callingApi.data.results.map((element) => {
    return axios.get(element.url);
  });
  const arrayPokes = await Promise.all(promeses)
    // ANDA BIEN
    //   const arrayPokes =  Promise.all(
    //     callingApi.data.results.map((element) => {
    //       return axios.get(element.url);
    //     })
    //   )
    .then((pokearray) => {
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
          createdInDataBase: false,
        };
      });
      // console.log(pokeArray);
      return pokeArray;
    });
  // console.log(arrayPokes);
  return arrayPokes;
};

// let p1 = getPokesFromApi();
// p1.then((result) => console.log(result)); // esto me devuelve el valor que retorna la promesa
// // console.log(getPokesFromApi()); // esto me devuelve undefined porque se ejecuta antes de que la promesa se resuelva

const getPokesFromDB = async () => {
  const pokes = await Pokemon.findAll({
    include: Type,
    // include : {
    //   model : Type ,
    //   atributes : ['name'] ,
    //   through : {

    //   }
    // }
  });
  return pokes;
};

const allPokes = async () => {
  const pokesFromApi = await getPokesFromApi();
  const pokesFromDB = await getPokesFromDB();
  return pokesFromApi.concat(pokesFromDB);
};

router.get("/", async (req, res) => {
  const { qname } = req.query;
  console.log(qname);
  let totalPokes = await allPokes();
  // console.log(totalPokes);
  if (qname) {
    let pokeName = await totalPokes.filter(
      (element) => element.name.toLowerCase() === qname.toLowerCase()
    );
    pokeName.length
      ? res.send(pokeName)
      : res.status(404).send("Ese pokemon no existe");
  } else {
    const dataAsked = totalPokes.map((element) => {
      const Poke = {
        name: element.name,
        types: element.types,
        img: element.img,
      };
      return Poke;
    });
    res.send(dataAsked);
  }
});

router.get("/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;
  let totalPokes = await allPokes();
  // console.log(totalPokes);
  let pokeName = await totalPokes.find(
    (element) => element.id === Number(idPokemon)
  );
  // console.log(pokeName);
  pokeName ? res.json(pokeName) : res.status(404).send("Ese pokemon no existe");
});

router.post("/", async (req, res) => {
  const {name, hp, attack, defense, speed, height, weight, types, img } = req.body;
  const createdPoke = await Pokemon.create({name, hp, attack, defense, speed, height, weight, img }) ; 
  const typeDB = await Type.findAll({
    where : {name : types}
  })
  console.log(typeDB);
  await createdPoke.addType(typeDB)
  res.send(createdPoke)
});
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;

// modelo para post 
// {"name": "mora",
//  "hp": "120",
//  "attack": "450",
//  "defense": "600",
//  "speed": "430",
//  "height": "4",
//  "weight": "10",
//  "types": ["ice" , "water"],
//  "img": "url" 
// }