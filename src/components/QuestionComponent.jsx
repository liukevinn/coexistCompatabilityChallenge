import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import styles from './QuestionComponent.module.css';

const QuestionComponent = ({ question, onAnswerSelected, onNextQuestion, onPreviousQuestion }) => {
    const [options, setOptions] = useState(question.options.map((option, index) => ({
        id: index,
        text: option,
        count: 0,
        percentage: 0,
        selected: false
    })));

    useEffect(() => {
        setOptions(question.options.map((option, index) => ({
            id: index,
            text: option,
            count: 0,
            percentage: 0,
            selected: false
        })));
    }, [question]);

    const handleOptionSelect = (id, points) => {
        const newOptions = options.map(option =>
            option.id === id ? { ...option, count: option.count + 1, selected: true } : option
        );
        updatePercentages(newOptions);
        onAnswerSelected(question.options[id], points);
    };

    const updatePercentages = (newOptions) => {
        const total = newOptions.reduce((acc, option) => acc + option.count, 0);
        const updatedOptions = newOptions.map(option => ({
            ...option,
            percentage: total > 0 ? (option.count / total * 100).toFixed(2) : 0
        }));
        setOptions(updatedOptions);
    };

    return (
        <Box className={styles.container}>
            <Box className={styles.header}>
             
                    <Button onClick={onPreviousQuestion} className={styles.backButton}>
                        back
                    </Button>
          
                <Typography className={styles.fraction}>
                    {question.questionFraction}
                </Typography>
                <Button 
                    className={styles.coexistButton} 
                    onClick={() => window.location.href='https://www.getcoexist.com/'}
                >
                    coexist
                </Button>
            </Box>
            <Box className={styles.questionBox}>
                {question.imageUrl && (
                    <img src={question.imageUrl} alt="Question" className={styles.questionImage} />
                )}
                <Typography variant="h5" className={styles.question}>
                    <p>how do you prefer to...</p>
                    {question.text}
                </Typography>
            </Box>
            <Box className={styles.options}>
                {options.map(option => (
                    <Button
                        key={option.id}
                        onClick={() => handleOptionSelect(option.id, question.points[option.id])}
                        className={styles.option}
                        disabled={option.selected}
                    >   
                        <div 
                            className={styles.optionBackground}
                            style={{ width: `${option.percentage}%` }}
                        ></div>
                        <Box className={styles.optionText}>
                            <span>{option.text}</span>
                            {option.selected && (
                                <span className={styles.responseText}>{option.percentage}%, {option.count} responses</span>
                            )}
                        </Box>
                    </Button>
                ))}
            </Box>
            <Button
                variant="contained"
                onClick={onNextQuestion}
                className={styles.nextButton}
                disabled={options.every(option => !option.selected)}
            >
                Next
            </Button>
        </Box>
    );
};

export default QuestionComponent;
