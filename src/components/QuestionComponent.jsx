import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './QuestionComponent.module.css';

const QuestionComponent = ({ question, onAnswerSelected, onNextQuestion }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [totalResponses, setTotalResponses] = useState(0);
    const [optionResponses, setOptionResponses] = useState([]);

    useEffect(() => {
        setSelectedOption(null);
        const total = question.options.reduce((sum, option) => sum + option.responses, 0);
        setTotalResponses(total);
        setOptionResponses(question.options.map(option => option.responses));
    }, [question]);

    const handleOptionSelect = (option, index) => {
        const newResponses = [...optionResponses];
        newResponses[index] += 1;
        setOptionResponses(newResponses);
        setTotalResponses(totalResponses + 1);
        setSelectedOption(index);
        onAnswerSelected(option, question.points[index]);
    };

    return (
        <div className={styles.container}>
            <div className={styles.questionBox}>
                <Typography variant="h5" className={styles.question}>
                    {question.text}
                </Typography>
                <div className={styles.options}>
                    {question.options.map((option, index) => (
                        <Box
                            key={index}
                            className={`${styles.option} ${index === selectedOption ? styles.optionSelected : ''}`}
                            onClick={() => handleOptionSelect(option, index)}
                        >
                            <Box className={styles.optionText}>
                                {option}
                            </Box>
                            {selectedOption !== null && (
                                <Box className={styles.progressContainer}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={(optionResponses[index] / totalResponses) * 100}
                                        className={styles.progressBar}
                                    />
                                    <Typography variant="body2" className={styles.responseText}>
                                        {((optionResponses[index] / totalResponses) * 100).toFixed(1)}%, {optionResponses[index]} responses
                                    </Typography>
                                </Box>
                            )}
                        </Box>
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
        </div>
    );
};

export default QuestionComponent;
