const Question = require('./question')
const Answer = require('./answer')
const Student = require('./student')

// Question has many students
Question.hasMany(Student, { foreignKey: 'questions_answered' });

Student.belongsToMany(Question, {through: Answer})

module.exports = {
  Question,
  Answer,
  Student
}