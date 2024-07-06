import React from 'react';
import styles from './LandingPageComponent.module.css';
import logo from '../pictures/68.Click-here.svg';
const LandingPageComponent = ({ onStartQuiz }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>coexist presents: what’s your homekeeping personality?</h1>
                <p>Lorem ipsum dolor sit amet. Ex molestiae unde eos cumque provident eum voluptas fugiat id amet nisi et error alias et dolorum dolores aut error debitis. </p>
            </div>
            <img src={logo} alt="Podcast Logo" />
            <div className={styles.footer}>
                <button onClick={onStartQuiz} className={styles.startButton}>Start Quiz</button>
            </div>
            
        </div>
    );
};

export default LandingPageComponent;
