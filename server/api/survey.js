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
    // console.log('answers', answers)
    const answerIds = Object.values(answers)
    // console.log('values', answerIds)

    const foundStudent = await Student.findOne({ where: { name:student.name } });

    if (foundStudent === null) {
      console.log('Student not found!');
    }
    if(foundStudent){
      console.log("the student", foundStudent)
     const data =  Object.keys(answers).forEach(async key =>{
       console.log("questionId",key,
        "choiceId",answers[key],
        "studentId", foundStudent.id)
      return(
        await Answer.create({
          questionId:key,
          choiceId:answers[key],
          studentId: foundStudent.id
        }))
      })
      console.log('the data', data)
    }
  } catch (error) {
    next(error);
    console.log('Error in the post /survey route', error);
  }
});
