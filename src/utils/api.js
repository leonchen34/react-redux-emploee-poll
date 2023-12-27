import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (question) {
  console.log("to save question:",question);
  return _saveQuestion(question)
}

export function saveQuestionAnswer(authedUser,qid,answer) {
  console.log("to save question answer");
  console.log(`${authedUser},${qid},${answer}`);
  return _saveQuestionAnswer(authedUser,qid,answer);
}