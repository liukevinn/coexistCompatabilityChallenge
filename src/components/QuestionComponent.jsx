import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import styles from './QuestionComponent.module.css';
import { getResponses, postResponse } from '../apiService';

const QuestionComponent = ({ question, questionId, onAnswerSelected, onNextQuestion }) => {
    const [options, setOptions] = useState([]);
    const [hasSelected, setHasSelected] = useState(false);

    useEffect(() => {
        const fetchResponses = async () => {
            try {
                const responses = await getResponses(questionId);
                const totalResponses = responses.reduce((acc, r) => acc + r.count, 0);
                const updatedOptions = question.options.map((option, index) => {
                    const response = responses.find(r => r.id === index + 1 + (questionId - 1) * 4) || { count: 0 };
                    const percentage = totalResponses > 0 ? ((response.count / totalResponses) * 100).toFixed(2) : 0;
                    return {
                        id: index + 1,  // Ensure the correct option ID is used here
                        text: option,
                        count: response.count,
                        percentage,
                        selected: false
                    };
                });
                setOptions(updatedOptions);
            } catch (error) {
                console.error("Error fetching responses:", error);
            }
        };

        fetchResponses();
        setHasSelected(false); // Reset the hasSelected state when question changes
    }, [questionId, question]);

    const handleOptionSelect = async (id, points) => {
        const newOptions = options.map(option =>
            option.id === id ? { ...option, count: option.count + 1, selected: true } : option
        );
        setHasSelected(true);
        updatePercentages(newOptions);
        onAnswerSelected(points);
        await postResponse(id+(questionId-1)*4);
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
                <Typography variant="h5" className={styles.questionText}
                sx={{fontFamily: 'Lexend, sans-serif'}}>
                    how do you prefer to...
                </Typography>
                <Typography variant="h5" className={styles.questionText}
                sx={{fontFamily: 'Lexend, sans-serif'}}>
                    {question.text}
                </Typography>
            </Box>
            <Box className={styles.options}>
            {options.map((option) => (
    <React.Fragment key={option.id}>
        <Button
            onClick={() => handleOptionSelect(option.id, question.points[option.id - 1])}
            className={styles.option}
            disabled={hasSelected}
            sx={{ border: '0.2vh solid black', borderRadius: '5vh' }}
        >
            <div
                className={styles.optionBackground}
                style={{
                    width: hasSelected ? `${option.percentage}%` : '0%', // Set width only if an option has been selected
                    backgroundColor: option.selected ? '#B1C5B1' : '#CCDBE6' // Apply the selected color or default
                }}
            ></div>
            <Box className={styles.optionText}>
                <span>{option.text}</span>
            </Box>
        </Button>
        <Box className={styles.responseData}>
            {hasSelected && (
                <Typography variant="body2" sx={{fontFamily: 'Lexend, sans-serif'}}>
                    {`${option.percentage}% (${option.count} response${option.count === 1 ? '' : 's'})`} 
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
                sx={{ textTransform: 'none', fontFamily: 'Lexend, sans-serif', borderRadius: '10vh' }}
            >
                next
            </Button>
        </Box>
    );
};

export default QuestionComponent;
