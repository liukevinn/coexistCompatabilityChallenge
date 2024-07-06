import React, { useState } from 'react';
import './App.css';
import LandingPageComponent from './components/LandingPageComponent.jsx';
import QuestionComponent from './components/QuestionComponent';
import ScoreComponent from './components/ScoreComponent';

const questions = [
    {
        text: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "London"],
        points: [4, 0, 0, 0]  // Points associated with each option
    },
    {
        text: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Mars", "Earth", "Venus"],
        points: [4, 0, 0, 0]
    },
    {
        text: "What element does 'O' represent on the periodic table?",
        options: ["Oxygen", "Gold", "Iron", "Calcium"],
        points: [4, 0, 0, 0] 
    }
]
const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);  // State to track selected option

  const startQuiz = () => {
      setQuizStarted(true);
      setCurrentQuestionIndex(0);
      setScore(0);
      setQuizFinished(false);
      setSelectedOption(null);  // Reset selected option when quiz starts
  };

  const handleAnswerSelected = (option, points) => {
      setScore(prevScore => prevScore + points);
  };

  const handleNextQuestion = () => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
          setCurrentQuestionIndex(nextQuestionIndex);
          setSelectedOption(null);  // Reset selected option when moving to next question
      } else {
          setQuizFinished(true);
          setQuizStarted(false);
      }
  };

  const resetSelection = () => {
      setSelectedOption(null);
  };

  return (
      <div>
          {!quizStarted ? (
              quizFinished ? (
                  <ScoreComponent score={score} onStartQuiz={startQuiz} />
              ) : (
                  <LandingPageComponent onStartQuiz={startQuiz} />
              )
          ) : (
              <QuestionComponent 
                  question={questions[currentQuestionIndex]} 
                  onAnswerSelected={handleAnswerSelected} 
                  onNextQuestion={handleNextQuestion}
                  resetSelection={resetSelection}
              />
          )}
      </div>
  );
}

export default App;