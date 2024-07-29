import React, { useState } from 'react';
import './App.css';
import LandingPageComponent from './components/LandingPageComponent.jsx';
import QuestionComponent from './components/QuestionComponent';
import ScoreComponent from './components/ScoreComponent';
import Header from './components/Header.jsx';
import DownloadButtons from './components/DownloadButtons';
import Blog from './components/Blog';

// Images
import pic1 from '/Users/kevinliu/Desktop/coexist compatability challenge/src/pictures/265.Shopping-With-My-Dog.svg';
import pic2 from '/Users/kevinliu/Desktop/coexist compatability challenge/src/pictures/92.Savings.svg';
import pic3 from '/Users/kevinliu/Desktop/coexist compatability challenge/src/pictures/211. Coffee.svg';
import pic4 from '/Users/kevinliu/Desktop/coexist compatability challenge/src/pictures/18.Chilling.svg';
import pic5 from '/Users/kevinliu/Desktop/coexist compatability challenge/src/pictures/236.Take-It.svg';
import pic6 from '/Users/kevinliu/Desktop/coexist compatability challenge/src/pictures/26.Nutritionist.svg';
import pic7 from '/Users/kevinliu/Desktop/coexist compatability challenge/src/pictures/122.Idea.svg';

const questions = [
    {
        text: "handle grocery shopping?",
        options: ["plan meals ahead and stick to a categorized shopping list", 
            "bulk buy non-perishables & frozen food at discounted rates",
             "buy nurturing food for cozy homemade meals",
              "explore different shops and make spontaneous grocery runs"],
        points: [4, 2, 3, 1],  // Points associated with each option
        imageUrl: pic1,
        questionFraction: "1/7"
    },
    {
        text: "manage the household budget?",
        imageUrl: pic2,
        options: ["keep a detailed spreadsheet and have regularly scheduled check-ins", "review expenses every once in a while to make sure we’re being financially efficient", "have regular discussions to make sure we’re staying comfortable", "handle it creatively and flexibly, adjusting as we go"],
        points: [4, 2, 3, 1],
        questionFraction: "2/7"
    },
    {
        text: "decide who does the dishes?",
        imageUrl: pic3,
        options: ["follow an alternating schedule to share dish duty fairly",
             "order take-out or use paper plates frequently to avoid having dishes", 
             "the cook gets a pass, and the other person does the dishes",
            "switch it up based on moods, energy levels, and creativity"],
        points: [4, 2, 3, 1],
        questionFraction: "3/7"
    }, 
    {
        text: "wash the bedsheets?",
        imageUrl: pic4,
        options: ["once a week",
             "once a month", 
             "every two weeks",
            "whenever it feels necessary"],
        points: [4, 2, 3, 1],
        questionFraction: "4/7"
    }, 
    {
        text: "handle cleaning at home?",
        options: ["use a vacuum robot and smart home gadgets to automate it as much as possible",
             "clean when necessary to keep the space functional and organized", 
             "regular cleaning, especially when guests come over to create an inviting space",
            "have a cleaning party when we’re feeling inspired"],
        points: [4, 2, 3, 1],
        imageUrl: pic5, 
        questionFraction: "5/7"
    }, 
    {
        text: "handle meal preparation at home?",
        imageUrl: pic6,
        options: ["plan out meals for the week and follow recipes closely",
             "ready-made or take-out meals",
             "one person loves cooking, and the other helps as needed",
            "have fun creating unique meals based on individual preferences and whatever we have at home"],
        points: [4, 2, 3, 1],
        questionFraction: "6/7"
    }, 
    {
        text: "manage home maintenance and repairs?",
        options: ["keep a schedule of regular maintenance tasks and use handy apps to quickly connect with experts for urgent repairs",
             "fix anything critical that is broken", 
             "have a designated “head of home maintenance” who’s in charge of keeping the home working smoothly",
            "get creative with DIY and have fun exploring solutions"],
        points: [4, 2, 3, 1],
        imageUrl: pic7,
        questionFraction: "7/7"
    }
];

const App = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswerSelected = (points) => {
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
        <div className="container">
            {!quizStarted ? (
                <LandingPageComponent onStartQuiz={() => setQuizStarted(true)} />
            ) : quizFinished ? (
                <>
                <Header 
                        onPreviousQuestion={handlePreviousQuestion} 
                        coexistUrl="https://getcoexist.com" 
                    />
                    <ScoreComponent score={score} onStartQuiz={() => setQuizStarted(false)} />
                    <div className="section">
                        <DownloadButtons />
                    </div>
                    <div className="section">
                        <Blog />
                    </div>
                </>
            ) : (
                <>
                    <Header 
                        onPreviousQuestion={handlePreviousQuestion} 
                        questionFraction={`${currentQuestionIndex + 1}/${questions.length}`} 
                        coexistUrl="https://getcoexist.com" 
                    />
                    <QuestionComponent 
                        question={questions[currentQuestionIndex]} 
                        onAnswerSelected={handleAnswerSelected} 
                        onNextQuestion={handleNextQuestion}
                        onPreviousQuestion={handlePreviousQuestion}
                    />
                </>
            )}
        </div>
    )
}
export default App;

    