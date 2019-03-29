const faker = require('faker');
const { generateNum } = require('./helpers');

const generateQuestionsData = n => {
  const questions = [];

  for (let i = 0; i < n; i++) {
    const question = {};
    question.date = faker.date.past();
    question.question = faker.lorem.sentence();
    questions.push(question);
  }

  return questions;
};

const generateAnswerData = () => {
  const answer = {};
  answer.date = faker.date.past();
  answer.answer = faker.lorem.paragraph();
  answer.votes = generateNum(20);
  return answer;
};

exports.generateQuestionsData = generateQuestionsData;
exports.generateAnswerData = generateAnswerData;
