const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Pokemon = sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        isUrl: true,
        allowNull: false,
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      atk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      def: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vel: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { timestamps: false }
  );

  Pokemon.beforeCreate(async (pokemon) => {
    try {
      const mxId = await Pokemon.max("id");

      //Se verifica si el pokemon que se está a punto de crear tiene un Id asignado si no, se asigna un nuevo Id. El nuevo Id se establece como el valor máximo actual más uno, o 152 si no hay registros en la tabla.

      if (!pokemon.id) {
        pokemon.id = mxId ? mxId + 1 : 152;
      }
    } catch (error) {
      console.error("Excediste el numero maximo de ID:", error);
      throw error;
    }
  });
};
