const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },
  imgurl:{
    type: Sequelize.STRING,
    defaultValue: "https://picsum.photos/200"
  },
  address:{
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = Campus;