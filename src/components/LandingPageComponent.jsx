import styles from "./LandingPageComponent.module.css";
import logo from "../pictures/68.Click-here.svg";

const LandingPageComponent = ({ questionsIsLoading, onStartQuiz }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          <span className={styles.coexist}>coexist</span>
          <span className={styles.coexist}></span>
          <span className={styles.presents}> presents:</span>
        </h1>
        <h2>what’s your homekeeping personality?</h2>
        <p>
          welcome to the coexist compatibility challenge! ready to find out if
          you're a tidiness guru or a laid-back lounger? this fun little quiz
          will help you uncover your unique home management style and learn
          about your compatibility with your partner. let's dive in and see how
          your quirks and habits can blend to create a harmonious (and maybe
          even spotless) home life.
        </p>
      </div>

      <div className={styles.footer}>
        <button
          onClick={onStartQuiz}
          disabled={questionsIsLoading}
          className={styles.startButton}
        >
          start quiz
        </button>
      </div>
      <img src={logo} alt="Podcast Logo" className={styles.logo} />
      <div className={styles.semiCircle}></div>
    </div>
  );
};

export default LandingPageComponent;
