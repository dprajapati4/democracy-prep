const router = require('express').Router();
const { Question, Choice } = require('../db/models');
module.exports = router;

// GET api/survey

router.get('/', async (req, res, next) => {
  try {

    const qa = await Question.findAll({
      include: [{
         model: Choice,
        }],
      });
    res.json(qa).status(200);

  } catch (error) {
    next(error);
    console.log('Error in the get /survey route', error);
  }
});

// router.post('/', async (req,res,next) => {
//   try {
//     const {selectedChoices,studentId} = req.body
//   } catch (error) {
//     next(error);
//     console.log('Error in the post /survey route', error);
//   }
// })