import React, { useState } from 'react';
import Question from './Question';
import PharmacyTechMathQuestions from './PharmacyTechMathQuestions';
import { Link } from 'react-router-dom';

const quizData = [
  ...PharmacyTechMathQuestions,
  // Add other questions and categories here
];

const CategorySelector = ({ setSelectedCategory }) => {
  const categories = [
    'Pharmacy Tech Math',
    'Prescriptions - Interpreting Prescription Orders (Rx)',
    'Pharmacy law',
    // Add more categories here
  ];

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select a category</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredQuizData = quizData.filter(
    (question) => question.category === selectedCategory
  );

  const handleAnswer = (option) => {
    if (option === filteredQuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <CategorySelector setSelectedCategory={setSelectedCategory} />
      {selectedCategory ? (
        currentQuestion < filteredQuizData.length ? (
          <Question
            data={filteredQuizData[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        ) : (
          <div>
            <p>
              Quiz complete! Your score is {score} out of{' '}
              {filteredQuizData.length}.
            </p>
          </div>
        )
      ) : (
        <p>Please select a category to start the quiz.</p>
      )}
    </div>
  );
};

export default Quiz;
