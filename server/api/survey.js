const router = require('express').Router();
const { Question, Choice, Student, Answer } = require('../db/models');
module.exports = router;

// GET api/survey

router.get('/', async (req, res, next) => {
  try {
    const qa = await Question.findAll({
      include: [
        {
          model: Choice,
        },
      ],
    });
    res.json(qa).status(200);
  } catch (error) {
    next(error);
    console.log('Error in the get /survey route', error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { student, answers } = req.body;
    const foundStudent = await Student.findOne({
      where: { name: student.name },
    });
    if (foundStudent === null) {
      console.log('student not found');
    }
    if (foundStudent) {
      const studentExists = await Answer.findByPk(foundStudent.id);
      if (studentExists) {
        res.send('Survey Already Submitted').status(403);
      } else {
        const data = Object.keys(answers).map(async (key) => {
          const createdAnswer = await Answer.create({
            questionId: key,
            choiceId: answers[key],
            studentId: foundStudent.id,
          });
          if (createdAnswer) {
            return createdAnswer;
          }
        });
        res.send(200);
      }
    }
  } catch (error) {
    next(error);
    console.log('Error in the post /survey route', error);
  }
});
