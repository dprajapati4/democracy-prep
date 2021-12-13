const Question = require('./question')
const Choice = require('./choice')
const Student = require('./student')


Question.hasMany(Choice, { foreignKey: 'questions_fk' })
Choice.belongsTo(Question);

Choice.belongsToMany(Student, { through: 'answer' })

module.exports = {
  Question,
  Choice,
  Student
}