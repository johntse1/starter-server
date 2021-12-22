const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gpa:{
    type: sequelize.FLOAT,
    defaultValue: 0.0,
    len: [0.0,4.0]
  },
  email:{
    type: Sequelize.STRING,
    allowNull:false
  },
  imgurl:{
    type: Sequelize.STRING,
    defaultValue: "https://picsum.photos/200"
  }
});

module.exports = Student;