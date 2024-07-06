
import React from 'react';
import styles from './ScoreComponent.module.css'; // Create and import CSS module for styling

const ScoreComponent = ({ score, onStartQuiz }) => {
    return (
        <div className={styles.container}>
            <h1>Your Final Score: {score}</h1>
            <button onClick={onStartQuiz} className={styles.restartButton}>Restart Quiz</button>
        </div>
    );
};

export default ScoreComponent;
