import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

const Home = () => {
  const [results, setResults] = useState({});
  const [questions, setQuestions] = useState([]);
  const [choices, setChoices] = useState([]);

  async function fetchData() {
    try {
      const { results, questions, choices } = await axios.get(
        '/api/admin/results'
      );
      const resultData = results.data;
      if (resultData.length) {
        const updatedData = organizedData(resultData);
        setResults(updatedData);
        setQuestions(questions);
        setChoices(choices);
      }
    } catch (error) {
      console.log('Error fetching the data', error);
    }
  }

  function organizedData(results) {
    const resultsCount = {};
    results.forEach((item) => {
      const { questionId, choiceId } = item;
      if (resultsCount[questionId]) {
        if (resultsCount[questionId][choiceId]) {
          resultsCount[questionId][choiceId]++;
        } else {
          resultsCount[questionId][choiceId] = 1;
        }
      } else {
        resultsCount[questionId] = {
          [choiceId]: 1,
        };
      }
    });
    return resultsCount;
  }

  useEffect(() => {
    fetchData();
  }, []);

  function numberOfSurveys(answers) {
    return _.uniq(answers, (answer) => {
      answer.studentId;
    }).length;
  }

  function groupData() {
    return Object.keys(results).map((key) => {
      const question = _.find(questions, () => question.id === key);
    });
  }
  const da = groupData();
  return (
    <div>
      <h1> Results </h1>
    </div>
  );
};

export default Home;
