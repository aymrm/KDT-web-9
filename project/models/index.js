'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./User')(sequelize);
db.Profile = require('./Profile')(sequelize);

db.User.hasOne(db.Profile,{foreignKey:"userid"});
db.Profile.belongsTo(db.User,{foreignKey:"userid"});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
