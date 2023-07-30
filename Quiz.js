import React, { useState } from 'react';
import Question from './Question';
import Options from './Options';

const Quiz = ({ data }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === data[currentQuestion].correctOption) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const retryQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-container">
          <h2>Your Score: {score}/{data.length}</h2>
          <button onClick={retryQuiz} className="retry-btn">Retry</button>
        </div>
      ) : (
        <>
          <Question question={data[currentQuestion].question} />
          <Options
            options={data[currentQuestion].options}
            handleOptionClick={handleOptionClick}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
