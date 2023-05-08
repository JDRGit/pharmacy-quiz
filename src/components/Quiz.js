import React, { useState } from 'react';
import Question from './Question';

const quizData = [
  {
    question: 'Which drug classification treats bacterial infections?',
    options: ['Antibiotics', 'Antivirals', 'Antifungals', 'Antiparasitics'],
    answer: 'Antibiotics',
  },
  {
    question: 'Which of the following is NOT a controlled substance?',
    options: ['Amphetamine', 'Morphine', 'Ibuprofen', 'Oxycodone'],
    answer: 'Ibuprofen',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < quizData.length ? (
        <Question
          data={quizData[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <div>
          <p>Quiz complete! Your score is {score} out of {quizData.length}.</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
