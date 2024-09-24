import db from './database/db.js'
import memeModel from './models/memeModel.js'

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');

    await memeModel.sync({force: true});
    console.log('The table for the meme model was just (re)created!💕')


  }catch (error) {
    console.error('Unable to connect to the database:', error);
  }