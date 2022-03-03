const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Pokemon, Type } = require("../db");
const { allPokes } = require('../controllers/utils');
const router = Router();



router.get("/", async (req, res) => {
  const { qname } = req.query;
  // console.log(qname);
  const totalPokes = await allPokes();
  // console.log(totalPokes);
  if (qname) {
    const pokeName = await totalPokes.filter(
      (element) => element.name.toLowerCase() === qname.toLowerCase()
    );
    pokeName.length
      ? res.send(pokeName)
      : res.status(404).send("Ese pokemon no existe");
  } else {
    const dataAsked = totalPokes.map((element) => {
      const Poke = {
        id : element.id ,
        name: element.name,
        types: element.types,
        img: element.img,
      };
      return Poke;
    });
    res.send(totalPokes);
  }
});

router.get("/:idPokemon", async (req, res) => {
  const  idPokemon  = req.params.idPokemon;
  const totalPokes = await allPokes();
  // console.log(totalPokes);
  if (idPokemon.length > 9) {
    const pokeName = await totalPokes.find(
      (element) => element.id === (idPokemon)
    );
    pokeName ? res.json(pokeName) : res.status(404).send("Ese pokemon no existe");
  }else {
    const pokeName = await totalPokes.find(
      (element) => element.id === Number(idPokemon)
      );
      pokeName ? res.json(pokeName) : res.status(404).send("Ese pokemon no existe");
    }
  // console.log(pokeName);
});

router.post("/", async (req, res) => {
  const {name, hp, attack, defense, speed, height, weight, types, img } = req.body;
  const createdPoke = await Pokemon.create({name, hp, attack, defense, speed, height, weight, img }) ; 
  const typeDB = await Type.findAll({
    where : {name : types}
  })
  // console.log(typeDB);
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