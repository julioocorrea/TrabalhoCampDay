// models/escola.js
module.exports = (sequelize, DataTypes) => {
  const Escola = sequelize.define('Escola', {
      nome: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
      pontos: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0 // Define um valor padrão para a pontuação
      }
  });

  return Escola;
};
