import { useState, useEffect, useRef } from "react";
import "./App.css";
import LandingPageComponent from "./components/LandingPageComponent.jsx";
import QuestionComponent from "./components/QuestionComponent";
import ScoreComponent from "./components/ScoreComponent";
import Header from "./components/Header.jsx";
import Blog from "./components/Blog";

// Images
import pic1 from "./pictures/265.Shopping-With-My-Dog.svg";
import pic2 from "./pictures/92.Savings.svg";
import pic3 from "./pictures/211. Coffee.svg";
import pic4 from "./pictures/216. Nice-Dreams.svg";
import pic5 from "./pictures/236.Take-It.svg";
import pic6 from "./pictures/26.Nutritionist.svg";
import pic7 from "./pictures/122.Idea.svg";
import { getQuestions } from "./apiService.js";

const images = [
  { questionId: 1, imageUrl: pic1 },
  { questionId: 2, imageUrl: pic2 },
  { questionId: 3, imageUrl: pic3 },
  { questionId: 4, imageUrl: pic4 },
  { questionId: 5, imageUrl: pic5 },
  { questionId: 6, imageUrl: pic6 },
  { questionId: 7, imageUrl: pic7 },
];

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionsIsLoading, setQuestionsIsLoading] = useState(true);
  const [selectedPoints, setSelectedPoints] = useState(
    new Array(questions.length).fill(0)
  );
  const firstRender = useRef(true);

  const handleAnswerSelected = (points) => {
    const updatedPoints = [...selectedPoints];
    updatedPoints[currentQuestionIndex] = points;
    setSelectedPoints(updatedPoints);
  };

  const getTotalScore = () =>
    selectedPoints.reduce((acc, curr) => acc + curr, 0);

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
    } else {
      setQuizStarted(false); // Go back to landing page if on the first question
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questions = await getQuestions();
        setQuestions(questions);
        setQuestionsIsLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    if (firstRender.current === true) {
      fetchQuestions();
    }
    firstRender.current = false;
  }, []);

  return (
    <div className="container">
      {!quizStarted ? (
        <LandingPageComponent
          questionsIsLoading={questionsIsLoading}
          onStartQuiz={() => setQuizStarted(true)}
        />
      ) : quizFinished ? (
        <>
          <div className="section">
            <Header
              showBackButton={false}
              coexistUrl="https://getcoexist.com"
            />
            <ScoreComponent
              score={getTotalScore()}
              onStartQuiz={() => setQuizStarted(false)}
            />
            {/* <DownloadButtons /> */}
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
            image={
              images.find(
                (i) => i?.questionId === questions[currentQuestionIndex]?.id
              )?.imageUrl ?? images[0]?.imageUrl
            }
            question={questions[currentQuestionIndex]}
            onNextQuestion={handleNextQuestion}
            onAnswerSelected={handleAnswerSelected}
            onPreviousQuestion={handlePreviousQuestion}
          />
        </>
      )}
    </div>
  );
};

export default App;
