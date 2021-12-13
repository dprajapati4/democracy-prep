const Sequelize = require('sequelize');
const db = require('../db');


const Question = db.define('question', {
  type: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  question: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Question

// Inlude Associations

// Include any instance methods

// Include any class Methods

// Hooks