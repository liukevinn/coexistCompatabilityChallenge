import React, { useState } from 'react';
import './App.css';
import LandingPageComponent from './components/LandingPageComponent.jsx';
import QuestionComponent from './components/QuestionComponent';
import ScoreComponent from './components/ScoreComponent';
import pic1 from '/Users/kevinliu/Desktop/coexist compatability challenge/src/pictures/265.Shopping-With-My-Dog.svg';

const questions = [
    {
        text: "handle grocery shopping?",
        options: ["plan meals ahead and stick to a categorized shopping list", 
            "bulk buy non-perishables & frozen food at discounted rates",
             "buy nurturing food for cozy homemade meals",
              "explore different shops and make spontaneous grocery runs"],
        points: [4, 2, 3, 1],  // Points associated with each option
        imageUrl: pic1,
        questionFraction: "1/3"
    },

    {
        text: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Mars", "Earth", "Venus"],
        points: [4, 0, 0, 0],
        questionFraction: "2/3"
    },
    {
        text: "What element does 'O' represent on the periodic table?",
        options: ["Oxygen", "Gold", "Iron", "Calcium"],
        points: [4, 0, 0, 0],
        questionFraction: "3/3"
    }
];

const App = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswerSelected = (option, points) => {
        setScore(prevScore => prevScore + points);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <div>
            {!quizStarted ? (
                <LandingPageComponent onStartQuiz={() => setQuizStarted(true)} />
            ) : quizFinished ? (
                <ScoreComponent score={score} onStartQuiz={() => setQuizStarted(false)} />
            ) : (
                <QuestionComponent 
                    question={questions[currentQuestionIndex]} 
                    onAnswerSelected={handleAnswerSelected} 
                    onNextQuestion={handleNextQuestion}
                    onPreviousQuestion={handlePreviousQuestion}
                />
            )}
        </div>
    );
}

export default App;
