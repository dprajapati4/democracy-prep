const router = require('express').Router();
const { Question, Choice, Student, Answer } = require('../db/models');
module.exports = router;

// GET api/admin/results

router.get('/:sortBy', async (req, res, next) => {
  try {
    const results = await Answer.findAll();
    const questions = await Question.findAll();
    const choices = await Choice.findAll();

    res.json({ results, questions, choices }).status(200);
  } catch (error) {
    next(error);
    console.log('Error in the get /admin/results route', error);
  }
});
