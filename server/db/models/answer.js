const Sequelize = require('sequelize');
const db = require('../db');

const Answer = db.define('answers', {
  questionId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  choiceId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  studentId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Answer;