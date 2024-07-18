import React from 'react';
import styles from './ScoreComponent.module.css'; // Create and import CSS module for styling
import { Facebook, Instagram, LinkedIn, Link } from '@mui/icons-material';

const handleShareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href), '_blank');
};

const handleShareInstagram = () => {
    // Instagram does not officially support direct sharing via web links
    alert('Instagram does not support direct sharing via web links.');
};

const handleShareLinkedIn = () => {
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(document.location.href), '_blank');
};

const handleCopyLink = () => {
    navigator.clipboard.writeText(document.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => alert('Failed to copy link: ', err));
};


const ScoreComponent = ({ score, onStartQuiz }) => {
    const getPersonalityType = (score) => {
        if (score >= 25 && score <= 28) {
            return {
                type: 'Tech-Savvy Strategist',
                blurb: 'You love leveraging technology and planning to keep your home running smoothly. Your organized and efficient approach ensures everything is always in top shape.',
                compatibilities: {
                    'Efficient Minimalists': 'Strategists and Minimalists can work well together, blending technology and practicality for a streamlined home.',
                    'Cozy Comforters': "Strategists may need to be patient with Comforters' relaxed approach but can find common ground by incorporating cozy tech solutions.",
                    'Creative Collectors': 'Strategists and Collectors may clash over structure, but mutual respect and innovation can lead to a harmonious home.'
                }
            };
        } else if (score >= 19 && score <= 24) {
            return {
                type: 'Efficient Minimalist',
                blurb: 'You value simplicity and practicality. Your home is well-organized, functional, and free of unnecessary clutter, making it a serene and efficient space.',
                compatibilities: {
                    'Tech-Savvy Strategists': 'Minimalists can appreciate the efficiency Strategists bring, creating a balanced and orderly home.',
                    'Cozy Comforters': 'Minimalists and Comforters can blend practicality with comfort, ensuring a well-managed yet cozy space.',
                    'Creative Collectors': "Minimalists might find Collectors' spontaneity challenging, but compromise can create a functional and vibrant home."
                }
            };
        } else if (score >= 13 && score <= 18) {
            return {
                type: 'Cozy Comforter',
                blurb: 'You prioritize comfort and coziness. Your home is a warm, inviting space where relaxation and enjoyment are key, even if it means a bit of controlled chaos.',
                compatibilities: {
                    'Tech-Savvy Strategists': 'Comforters can enjoy the convenience Strategists offer while adding a warm touch to tech-driven solutions.',
                    'Efficient Minimalists': 'Comforters and Minimalists can find harmony in balancing coziness with practicality, creating a relaxed yet organized home.',
                    'Creative Collectors': 'Comforters and Collectors share a love for creativity and comfort, making for a uniquely personal and inviting home.'
                }
            };
        } 
        return {
            type: 'Creative Collector',
            blurb: 'You embrace creativity and spontaneity in your home management. Your space is vibrant and full of unique touches, reflecting your free-spirited personality.',
            compatibilities: {
                'Tech-Savvy Strategists': 'Collectors and Strategists may need to navigate differing priorities, but creativity and innovation can bridge the gap.',
                'Efficient Minimalists': 'Collectors can benefit from the structure Minimalists provide, adding their own creative flair for a harmonious space.',
                'Cozy Comforters': 'Collectors and Comforters can create a lively, warm home full of personal touches and creative expressions.'
            }
        }
    };

    const personality = getPersonalityType(score);

    return (
        <div className={styles.container}>
            <h1>Your Final Score: {score}</h1>
            <h2>You are a {personality.type}</h2>
            <p>{personality.blurb}</p>
            
            <h3>Share Your Results:</h3>
            <div className={styles.shareOptions}>
                <button onClick={handleShareFacebook}><Facebook /></button>
                <button onClick={handleShareInstagram}><Instagram /></button>
                <button onClick={handleShareLinkedIn}><LinkedIn /></button>
                <button onClick={handleCopyLink}><Link /></button>
            </div>
            <h3>Your Compatibility With...</h3>
            <ul>
                {Object.entries(personality.compatibilities).map(([type, description]) => (
                    <li key={type}><strong>{type}:</strong> {description}</li>
                ))}
            </ul>
        </div>

    );
};

export default ScoreComponent;
