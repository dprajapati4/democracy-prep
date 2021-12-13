const {Question, Choice, Student} = require('../server/db/models')
const db = require('../server/db/index')
async function seed() {
  await db.sync()
  // clears db and matches models to tables
  // await db.sync({ force: true })
  console.log('db synced!')

  // Questions

  const students = [
    {
      name:'Gianna Kimball',
      grade:7,
      school:'Democracy Prep Charter High School',
      class:'07, Tennessee State University'
    },
    {
      name:'Ghazi	Gantt',
      grade:7,
      school:'Democracy Prep Charter High School',
      class:701
    },
    {
      name:'Dejanae Yang',
      grade:8,
      school:'Harlem Prep High School',
      class:'08, Howard'
    },
    {
      name:'Christian	Priest',
      grade:10,
      school:'Harlem Prep High School',
      class:'10, University of Rochester'
    },
    {
      name:'Janelle	Garmon',
      grade:6,
      school:'Harlem Prep High School',
      class: '06, Albany'
    },
    {
      name:'Amir	Cowart',
      grade:9,
      school:'Freedom Prep High School',
      class:'09, 9ol1'
    },

    {
      name:'Joice	Paige',
      grade:11,
      school:'Freedom Prep High School',
      class:'11, Muhlenberg University'
    },
    {
      name:'Melanie	Brunner',
      grade:8,
      school:'Freedom Prep High School',
      class:'08, Williams College'
    },
  ];

  const questions = [
    // {
    //   type:'text',
    //   question: 'Parent/Guardian Name'
    // },
    // {
    //   type:'text',
    //   question: 'Parent/Guardian Email'
    // },
    // {
    //   type:'text',
    //   question: 'Students in household'
    // },
    {
      type:'radio',
      question: 'Please rate your level of agreement with the following sentence: I am concerned about my children returning in-person learning for the upcoming semester due to health and safety reasons related to COVID-19.'
    },
    {
      type:'radio',
      question: 'If social distancing guidelines and safety precautions are met and satisfied, do you consider sending your child(ren) back to school five days a week?'
    },
    {
      type:'radio',
      question: 'During the upcoming school year, we may apply a hybrid model that includes some in-person classroom and some remote learning. Please select your preference if this is applied:'
    },
    {
      type:'radio',
      question: 'Does your household have an adequate internet connection for virtual learning?'
    },
    {
      type:'radio',
      question: ' What is your comfort level of returning to school in the upcoming school year?'
    }
  ];

  const choices = [
    {
      choice:'Agree',
      questions_fk: 1
    },
    {
      choice:'Disagree',
      questions_fk:1
    },
    {
      choice:'I do not know',
      questions_fk:1
    },
    {
      choice:'My Children will not return for the next semester',
      questions_fk:1
    },
    {
      choice:'Yes',
      questions_fk:2
    },
    {
      choice:'No',
      questions_fk:2
    },

    {
      choice:'Half day education model can be applied and students can attend either morning or afternoon programs.',
      questions_fk:3
    },
    {
      choice:'Students can go to school 2 or 3 days each week and remote learning programs can be applied for the rest of the week.',
      questions_fk:3
    },
     {
      choice:'Students can go to school if there is a special need or requirement and otherwise, remote learning programs can be applied.',
      questions_fk:3
    },
    {
      choice:'I prefer full-time remote learning during the school year.',
      questions_fk:3
    },
    {
      choice:'I have no preference.',
      questions_fk:3
    },
    {
      choice:'Yes',
      questions_fk:4
    },
    {
      choice:'No',
      questions_fk:4
    },
    {
      choice:'1',
      questions_fk:5
    },
    {
      choice:'2',
      questions_fk:5
    },
    {
      choice:'3',
      questions_fk:5
    },
    {
      choice:'4',
      questions_fk:5
    },
    {
      choice:'5',
      questions_fk:5
    }
  ]

  const studentInstances = await Student.bulkCreate(students)
  console.log(`seeded ${students.length} students`)

  const questionInstances = await Question.bulkCreate(questions)
  console.log(`seeded ${questions.length} questions`)

  const choiceInstances = await Choice.bulkCreate(choices)
  console.log(`seeded ${choices.length} choices`)


}


async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}


module.exports = seed