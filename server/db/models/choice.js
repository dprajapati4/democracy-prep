const Sequelize = require('sequelize');
const db = require('../db');

const Choice = db.define('choices', {
  choice: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Choice;