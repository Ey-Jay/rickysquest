import React from 'react';

const Question = ({ question, answers, selectedAnswer, setAnswersGiven }) => {
  return (
    <div>
      <label htmlFor="">{question}</label>
      <br />
      {answers.map((answerStr, answerID) => {
        return (
          <Answer
            key={answerID}
            answerStr={answerStr}
            checked={selectedAnswer === answerID}
            onClick={() => setAnswersGiven(answerID)}
          />
        );
      })}
    </div>
  );
};
//selectedAnswer === answerID;

const Answer = ({ checked, answerStr, onClick }) => {
  return (
    <>
      <label>{answerStr}</label>
      <input checked={checked} type="radio" onChange={onClick} />
      <br />
    </>
  );
};

export default Question;
