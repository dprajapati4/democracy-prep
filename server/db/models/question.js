const Sequelize = require('sequelize');
const db = require('../db');

const Question = db.define('question', {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  question: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Question;
