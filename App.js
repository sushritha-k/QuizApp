import React from 'react';
import './App.css';
import Quiz from './components/Quiz';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctOption: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctOption: 'Mars',
  },
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Lion'],
    correctOption: 'Blue Whale',
  },
  {
    question: 'Which is the tallest mountain in the world?',
    options: ['K2', 'Mount Everest', 'Makalu', 'Kangchenjunga'],
    correctOption: 'Mount Everest',
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'O2', 'CH4'],
    correctOption: 'H2O',
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Quiz data={quizData} />
    </div>
  );
};

export default App;
