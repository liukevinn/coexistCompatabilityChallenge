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
    const [hasSelected, setHasSelected] = useState(false);

    useEffect(() => {
        setOptions(question.options.map((option, index) => ({
            id: index,
            text: option,
            count: 0,
            percentage: 0,
            selected: false
        })));
        setHasSelected(false);
    }, [question]);

    const handleOptionSelect = (id, points) => {
        const newOptions = options.map(option =>
            option.id === id ? { ...option, count: option.count + 1, selected: true } : option
        );
        setHasSelected(true);
        updatePercentages(newOptions);
        onAnswerSelected(points);
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
            
            <Box className={styles.questionBox}>
                {question.imageUrl && (
                    <img src={question.imageUrl} alt="Question" className={styles.questionImage} />
                )}
                <Typography variant="h5" className={styles.questionText}>
                    <p>How do you prefer to...</p>
                    {question.text}
                </Typography>
            </Box>
            <Box className={styles.options}>
                {options.map((option) => (
                    <React.Fragment key={option.id}>
                        <Button
                            onClick={() => handleOptionSelect(option.id, question.points[option.id])}
                            className={styles.option}
                            disabled={hasSelected}
                        >
                            <div 
                                className={styles.optionBackground}
                                style={{ width: hasSelected ? `${option.percentage}%` : '0%' }}
                            ></div>
                            <Box className={styles.optionText}>
                                <span>{option.text}</span>
                            </Box>
                        </Button>
                        <Box className={styles.responseData}>
                            {hasSelected && (
                                <Typography variant="body2">
                                    {`${option.percentage}% (${option.count} responses)`}
                                </Typography>
                            )}
                        </Box>
                    </React.Fragment>
                ))}
            </Box>
            <Button
                variant="contained"
                onClick={onNextQuestion}
                className={styles.nextButton}
                disabled={!hasSelected}
            >
                Next
            </Button>
        </Box>
    );
};

export default QuestionComponent;
