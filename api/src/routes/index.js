const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Pokemon, Type } = require("../db");
const { allPokes, getPokeByID } = require("../controllers/utils");
const router = Router();

router.get("/", async (req, res) => {
  const { qname } = req.query;
  const totalPokes = await allPokes();
  try {
    if (qname) {
      const pokeName = await totalPokes.find(
        (element) => element.name.toLowerCase() === qname.toLowerCase()
      );
      const answer = [pokeName] ;
      pokeName
        ? res.send(answer)
        : res.status(404).send("Ese pokemon no existe");
    } else {
      res.send(totalPokes);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/:idPokemon", async (req, res) => {
  const idPokemon = req.params.idPokemon;
  if (idPokemon.length > 9) {
    try {
      const pokeName = await getPokeByID(idPokemon);
      pokeName
        ? res.json(pokeName)
        : res.status(404).send("Ese pokemon no existe");
    } catch (error) {
      console.log(error);
    }
  }
});

router.post("/", async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, types, img } =
    req.body;
  const createdPoke = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    img,
  });
  const typeDB = await Type.findAll({
    where: { name: types },
  });
  await createdPoke.addType(typeDB);
  res.send(createdPoke);
});

router.put('/edit/:id' , async (req, res) => {
  const {id} = req.params ;
  const { name, hp, attack, defense, speed, height, weight, types, img } =
  req.body;

  try {
    await Pokemon.update({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      img,
    },
    {
        where: 
        {
            id : id
        }
    });
    const typeDB = await Type.findAll({
      where: { name: types },
    });
    const editPoke = await Pokemon.findByPk(id)

    await editPoke.setTypes(typeDB);

    res.send(editPoke);
  } catch (error) {
    console.log(error);
  }

})

router.delete('/delete/:id' , async (req, res) => {
  const {id} = req.params ; 
  try {
    await Pokemon.destroy({ where : {id:id}})
    res.send ('se elimino el pokemon')
  } catch (error) {
    console.log(error);
  }
})
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;


