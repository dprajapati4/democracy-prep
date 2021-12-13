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
    type: Sequelize.STRING,
    allowNull: false
  },
  class: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Student;