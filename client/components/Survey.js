import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Survey = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedChoices, setChoices] = useState({});
  const [studentData, setStudent] = useState({});

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

  async function submitData() {
    try {
      await axios.post('/api/survey', {
        student: studentData,
        answers: selectedChoices,
      });
    } catch (error) {
      console.log('Error submitting survey data', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    submitData();
    setChoices({});
    setStudent({});
    window.alert('Survey Submitted!');
  };

  const handleChange = (e, choice) => {
    e.preventDefault();
    setChoices(() => ({ ...selectedChoices, ...choice }));
  };

  const handleStudentData = (e, field) => {
    e.preventDefault();
    setStudent(() => ({ ...studentData, ...field }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('student', selectedChoices);

  return (
    <div>
      <h1> Democracy Prep Schools Survey Form </h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="studentInformation">
          <label for="name">Student Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => handleStudentData(e, { ['name']: e.target.value })}
          />
          <label for="school">School:</label>
          <input
            type="text"
            id="school"
            name="school"
            required
            onChange={(e) =>
              handleStudentData(e, { ['school']: e.target.value })
            }
          />
          <label for="grade">Grade:</label>
          <input
            type="text"
            id="grade"
            name="grade"
            required
            onChange={(e) =>
              handleStudentData(e, { ['grade']: e.target.value })
            }
          />
          <label for="class">Class:</label>
          <input
            type="text"
            id="class"
            name="class"
            required
            onChange={(e) =>
              handleStudentData(e, { ['class']: e.target.value })
            }
          />
        </div>
        <div className="questions">
          {questions.map((question) => {
            return (
              <div>
                <p key={question.id}> {question.question} </p>
                {question.choices.map((choice) => {
                  return (
                    <div>
                      <input
                        type={question.type}
                        required
                        onChange={(e) =>
                          handleChange(e, { [choice.questions_fk]: choice.id })
                        }
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
        </div>
      </form>
    </div>
  );
};
export default Survey;
