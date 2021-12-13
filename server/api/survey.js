const router = require('express').Router()
const {Question} = require('../db/models')
module.exports = router

// GET api/survey

router.get('/',async(req,res,next) => {
  try {
    const questions = await Question.findAll();
    console.log('the questions:', questions)
    res.json(questions).status(200)
  } catch (error) {
    next(error)
    console.log('Error in the get /survey route', error)
  }
})