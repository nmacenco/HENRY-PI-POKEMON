const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Type } = require("../db");

const axios = require("axios");
const router = Router();

router.get("/", async (req, res) => {
  const apiTypes = await axios.get("https://pokeapi.co/api/v2/type");
  const types = apiTypes.data.results.map((element) => element.name);

  types.map((element) => {
    Type.findOrCreate({
      where: { name: element },
    });
  });

  const allTypes = await Type.findAll();
  res.send(allTypes);
  //   res.send('responde')
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
