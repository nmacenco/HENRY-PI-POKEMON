const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
      allowNull : false , 
      primaryKey : true , 

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp : {
      type : DataTypes.INTEGER, 
    },
    attack : {
      type : DataTypes.INTEGER ,
    },
    defense : {
      type : DataTypes.INTEGER , 
    }, 
    speed : { 
      type : DataTypes.INTEGER ,
    },
    height : {
      type : DataTypes.INTEGER , 
    },
    weight : {
      type : DataTypes.INTEGER
    }, 
    img : {
      type : DataTypes.STRING , 
      allowNull : true , 
      defaultValue : null , 
    },
    createdInDataBase : {
      type : DataTypes.BOOLEAN , 
      defaultValue : true , 
      allowNull : false , 
    }
  });
};
