const Question = require('./question')
const Choice = require('./choice')
const Student = require('./student');
const Answer = require('./answer');


Question.hasMany(Choice, { foreignKey: 'questions_fk' })
Choice.belongsTo(Question);

// Choice.belongsToMany(Student, { through: 'answer' })

module.exports = {
  Question,
  Choice,
  Student,
  Answer
}