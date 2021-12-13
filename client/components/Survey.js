import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Survey = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedChoices, setChoices] = useState({});
  const [studentData, setStudent] = useState({})

  async function fetchData() {
    try {
      const { data } = await axios.get('/api/survey');
      if (data.length) {
        const updatedData = await data;
        setQuestions(updatedData);
      }
    } catch (error) {
      console.log('Error fetching the data', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in the handle sub')
   };

  const handleChange = (e, choice) => {
    e.preventDefault();
    setChoices(() => ({ ...selectedChoices, ...choice }));
  };

  const handleStudentData = (e) => {
    e.preventDefault();

    setStudent({

    })
    console.log('hc',e.target.label)
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log('choices', selectedChoices);

  return (
    <div>
      <h1> Democracy Prep Schools Survey Form </h1>
      <form onSubmit={handleSubmit}>
      <label for="name">Student Name:</label>
      <input type="text" id="name" name="name" onChange={(e) => handleStudentData(e,)}/>
      <label for="school">School:</label>
      <input type="text" id="school" name="school" onChange={handleStudentData}/>
      <label for="grade">Grade:</label>
      <input type="text" id="grade" name="grade" onChange={handleStudentData}/>
      <label for="class">Class:</label>
      <input type="text" id="class" name="class" onChange={handleStudentData}/>

        {questions.map((question) => {
          return (
            <div>
              <p key={question.id}> {question.question} </p>
              {question.choices.map((choice) => {
                return (
                  <div>
                    <input
                      type={question.type}
                      onChange={(e) => handleChange(e, {[choice.questions_fk]:choice.id})}
                      name={`Choice for ${choice.questions_fk}`}
                      value={choice.id}
                    />
                    <label for={`Choice for ${choice.questions_fk}`}>
                      {choice.choice}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Survey;
