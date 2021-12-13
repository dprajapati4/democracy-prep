const Sequelize = require('sequelize');
const db = require('../db');


const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  school: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  class: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Student;