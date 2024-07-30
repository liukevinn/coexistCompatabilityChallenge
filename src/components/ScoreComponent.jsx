import React from 'react';
import styles from './ScoreComponent.module.css'; // Ensure this path is correct
import { Facebook, Instagram, LinkedIn, Link } from '@mui/icons-material';
import pic1 from '../pictures/122.Idea.svg'; // Ensure these paths are correct

const handleShareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href), '_blank');
};


const handleShareLinkedIn = () => {
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(document.location.href), '_blank');
};

const handleCopyLink = () => {
    navigator.clipboard.writeText(document.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => alert('Failed to copy link: ', err));
};

const ScoreComponent = ({ score }) => {
    const getPersonalityType = (score) => {
        if (score >= 25 && score <= 28) {
            return {
                type: 'Tech-Savvy Strategist',
                blurb: 'You love leveraging technology and planning to keep your home running smoothly. Your organized and efficient approach ensures everything is always in top shape.',
                compatibilities: [
                    { type: 'Efficient Minimalists', description: 'Strategists and Minimalists can work well together, blending technology and practicality for a streamlined home.', imageUrl: pic1 },
                    { type: 'Cozy Comforters', description: "Strategists may need to be patient with Comforters' relaxed approach but can find common ground by incorporating cozy tech solutions.", imageUrl: pic1 },
                    { type: 'Creative Collectors', description: 'Strategists and Collectors may clash over structure, but mutual respect and innovation can lead to a harmonious home.', imageUrl: pic1 }
                ]
            };
        } else if (score >= 19 && score <= 24) {
            return {
                type: 'Efficient Minimalist',
                blurb: 'You value simplicity and practicality. Your home is well-organized, functional, and free of unnecessary clutter, making it a serene and efficient space.',
                compatibilities: [
                    { type: 'Tech-Savvy Strategists', description: 'Minimalists can appreciate the efficiency Strategists bring, creating a balanced and orderly home.', imageUrl: pic1 },
                    { type: 'Cozy Comforters', description: 'Minimalists and Comforters can blend practicality with comfort, ensuring a well-managed yet cozy space.', imageUrl: pic1 },
                    { type: 'Creative Collectors', description: "Minimalists might find Collectors' spontaneity challenging, but compromise can create a functional and vibrant home.", imageUrl: pic1 }
                ]
            };
        } else if (score >= 13 && score <= 18) {
            return {
                type: 'Cozy Comforter',
                blurb: 'You prioritize comfort and coziness. Your home is a warm, inviting space where relaxation and enjoyment are key, even if it means a bit of controlled chaos.',
                compatibilities: [
                    { type: 'Tech-Savvy Strategists', description: 'Comforters can enjoy the convenience Strategists offer while adding a warm touch to tech-driven solutions.', imageUrl: pic1 },
                    { type: 'Efficient Minimalists', description: 'Comforters and Minimalists can find harmony in balancing coziness with practicality, creating a relaxed yet organized home.', imageUrl: pic1 },
                    { type: 'Creative Collectors', description: 'Comforters and Collectors share a love for creativity and comfort, making for a uniquely personal and inviting home.', imageUrl: pic1 }
                ]
            };
        } else {
            return {
                type: 'Creative Collector',
                blurb: 'You embrace creativity and spontaneity in your home management. Your space is vibrant and full of unique touches, reflecting your free-spirited personality.',
                compatibilities: [
                    { type: 'Tech-Savvy Strategists', description: 'Collectors and Strategists may need to navigate differing priorities, but creativity and innovation can bridge the gap.', imageUrl: pic1 },
                    { type: 'Efficient Minimalists', description: 'Collectors can benefit from the structure Minimalists provide, adding their own creative flair for a harmonious space.', imageUrl: pic1 },
                    { type: 'Cozy Comforters', description: 'Collectors and Comforters can create a lively, warm home full of personal touches and creative expressions.', imageUrl: pic1 }
                ]
            };
        }
    };
    

    const personality = getPersonalityType(score);

    return (
        <div className={styles.container}>
            <div className={styles.semiCircle}></div> {/* Moved here to ensure it's the background */}
            <h2>your result:</h2>
            <img src={pic1} className={styles.compatibilityImage} />
            <h2>{personality.type}</h2>
            <p className={styles.description}>{personality.blurb}</p>

            <div className={styles.shareContainer}>
                <h3>share your results:</h3>
                <div className={styles.icons}>
                    <button onClick={handleShareFacebook}><Facebook /></button>
                
                    <button onClick={handleShareLinkedIn}><LinkedIn /></button>
                    <button onClick={handleCopyLink}><Link /></button>
                </div>
            </div>

            <div className={styles.compatibility}>
                <h3>your compatibility with...</h3>
                {personality.compatibilities.map((comp) => (
                    <div key={comp.type} className={styles.compatibilityItem}>
                        <img src={comp.imageUrl} alt={comp.type} className={styles.compatibilityImage} />
                        <div className={styles.compatibilityText}>
                            <strong>{comp.type}:</strong> {comp.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScoreComponent;
