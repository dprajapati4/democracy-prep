const Sequelize = require('sequelize');
const db = require('../db');


// Simple model example
const Answer = db.define('answer', {
  type: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  answer: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Answer;