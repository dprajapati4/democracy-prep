import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Survey = () => {
  const [questions, setQuestions] = useState([]);

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
  useEffect(() => {
    fetchData();
  }, []);

  console.log('questions', questions);

  return (
    <div>
      <h1> Democracy Prep Schools Survey Form </h1>
      <form>
        {questions.map((question) => {
          return (
            <div>
              <p key={question.id}> {question.question} </p>
              {question.choices.map((choice) => {
                console.log('insdideasdaasd', choice);
                return (
                  <div>
                    <input type={question.type} id="fname" name="fname" />
                    <label for={`Choice for ${choice.questions_fk}`}>
                      {choice.choice}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </form>
    </div>
  );
};
export default Survey;
