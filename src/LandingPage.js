import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Pharmacy Tech Quiz Whiz</h1>
      <p>Become a trivia genius with custom quizzes for pharmacy technicians!</p>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default LandingPage;
