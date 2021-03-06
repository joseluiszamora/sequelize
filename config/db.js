const Sequelize = require('sequelize')

// const env = require('./env');
import { env } from './env'

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  //port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.owners = require('../models/owners.js')(sequelize, Sequelize);
db.pets = require('../models/pets.js')(sequelize, Sequelize);

//Relations
db.pets.belongsTo(db.owners);
db.owners.hasMany(db.pets);

module.exports = db;