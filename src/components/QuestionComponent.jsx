import React, { useState, useEffect } from 'react';
import styles from './QuestionComponent.module.css';

const QuestionComponent = ({ question, onAnswerSelected, onNextQuestion }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    // Reset selected option whenever the question changes
    useEffect(() => {
        setSelectedOption(null);
    }, [question]);

    const handleOptionSelect = (option, index) => {
        setSelectedOption(index);  // Store the index of the selected option
        onAnswerSelected(option, question.points[index]);  // Handle scoring here
    };

    return (
        <div className={styles.container}>
            <div className={styles.question}>
                {question.text}
            </div>
            <div className={styles.options}>
                {question.options.map((option, index) => (
                    <div key={index} className={styles.option} onClick={() => handleOptionSelect(option, index)}>
                        {option}
                        <span className={index === selectedOption ? styles.circleSelected : styles.circle}></span>
                    </div>
                ))}
            </div>
            <button 
                className={styles.nextButton} 
                onClick={onNextQuestion} 
                disabled={selectedOption === null}
            >
                Next
            </button>
        </div>
    );
};

export default QuestionComponent;
