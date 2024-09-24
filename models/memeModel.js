import db from '../database/db.js'
import { DataTypes } from 'sequelize';

const memeModel = db.define(
  'Meme',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      // allowNull defaults to true
      allowNull: false,
    },
    date: {
        type:  DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type:  DataTypes.STRING,
        allowNull: false,
    },
    stream: {
        type:  DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type:  DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    // Other model options go here
    timestamps: false,
  },
);

// `sequelize.define` also returns the model
console.log(memeModel === db.models.Meme); // true
export default memeModel