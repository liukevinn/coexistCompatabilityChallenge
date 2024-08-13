import React from 'react';
import styles from './ScoreComponent.module.css'; // Ensure this path is correct
import { Facebook, LinkedIn, Link } from '@mui/icons-material';
import tecSav from '../pictures/310.Fast-Internet.svg';
import cozCom from '../pictures/328.Cup-Of-Coffee.svg';
import effMin from '../pictures/264.Teaming-Up.svg';
import creCol from '../pictures/33.Details.svg';

const ScoreComponent = ({ score }) => {
    const getPersonalityType = (score) => {
        if (score >= 25 && score <= 28) {
            return {
                imageUrl: tecSav,
                type: 'Tech-Savvy Strategist',
                blurb: 'You’re the quintessential modern home manager, using cutting-edge technology and meticulous planning to keep everything running like clockwork. Your home is a model of efficiency, featuring smart gadgets, organized systems, and a clear strategy for every task. Whether it’s through automated lighting, a sophisticated home security system, or a precisely scheduled cleaning rota, you make sure that every detail is accounted for. Your friends might admire your flawless, clutter-free spaces and your knack for optimizing every aspect of home life. For you, technology isn’t just a tool—it’s a way of life that enhances comfort and streamlines routines.',
                compatibilities: [
                    { type: 'Efficient Minimalists', description: 'Strategists and Minimalists can work well together, blending technology and practicality for a streamlined home. You may have different approaches to getting things done, but at the end of the day, you both appreciate a time-saving solution.', imageUrl: effMin },
                    { type: 'Cozy Comforters', description: "If Strategists can learn to appreciate the warmth of Comforters’ coziness, this could be the perfect pairing. Find common ground by incorporating cozy tech solutions that make your home more inviting.", imageUrl: cozCom },
                    { type: 'Creative Collectors', description: 'Strategists and Collectors may clash over structure, but finding mutual respect over creativity and innovation can lead to a harmonious home.', imageUrl: creCol }
                ]
            };
        } else if (score >= 19 && score <= 24) {
            return {
                imageUrl: cozCom,
                type: 'Cozy Comforter',
                blurb: 'You’re a master of creating a warm, inviting environment where comfort reigns supreme. Your home feels like a hug, with plush sofas, soft throws, and a steady supply of hot beverages. Your focus is on making sure space is perfect for relaxation, whether it’s a nook for reading or a spot for gathering with friends. Your ability to make people feel at ease and your dedication to comfort make your home a true sanctuary where everyone feels welcome.',
                compatibilities: [
                    { type: 'Tech-Savvy Strategists', description: 'If Strategists can learn to appreciate the warmth of Comforters’ coziness, this could be the perfect pairing. Find common ground by incorporating cozy tech solutions that make your home more inviting.', imageUrl: tecSav },
                    { type: 'Efficient Minimalists', description: 'While Minimalists don’t always focus on comfort, they can appreciate the warmth that Comforters bring. By integrating Comforters\' cozy elements into a minimalist framework, you can create a space that balances simplicity with inviting warmth.', imageUrl: effMin },
                    { type: 'Creative Collectors', description: 'Collectors and Comforters can create a lively, warm home full of personal touches and creative expressions. This duo likely throws the best parties in town!', imageUrl: creCol }
                ]
            };
        } else if (score >= 13 && score <= 18) {
            return {
                imageUrl: effMin,
                type: 'Efficient Minimalist',
                blurb: 'Your home is a testament to the beauty of simplicity and functionality. You’ve mastered the art of decluttering and streamlining, resulting in a serene, harmonious space that exudes calm and order. Everything in your home has a purpose, and you value practicality over excess. Your clean lines and uncluttered surfaces reflect your approach to life—clear, focused, and free from unnecessary distractions. Friends may admire your ability to keep things organized and your home is a peaceful retreat from the chaos of everyday life for you.',
                compatibilities: [
                    { type: 'Tech-Savvy Strategists', description: 'Strategists and Minimalists can work well together, blending technology and practicality for a streamlined home. You may have different approaches to getting things done, but at the end of the day, you both appreciate a time-saving solution.', imageUrl: tecSav },
                    { type: 'Cozy Comforters', description: 'While Minimalists don’t always focus on comfort, they can appreciate the warmth that Comforters bring. By integrating Comforters\' cozy elements into a minimalist framework, you can create a space that balances simplicity with inviting warmth.', imageUrl: cozCom },
                    { type: 'Creative Collectors', description: "Minimalists might find Collectors' spontaneity challenging, but focusing on each others’ strengths to build a vibrant home filled with both practicality and creativity will bring you happiness.", imageUrl: creCol }
                ]
            };
        } else {
            return {
                imageUrl: creCol,
                type: 'Creative Collector',
                blurb: 'Your home is a canvas for your imagination, bursting with vibrant colors, eclectic decor, and one-of-a-kind treasures. You embrace spontaneity and creativity, making your space a unique reflection of your dynamic personality. Each item in your home tells a story, from quirky finds at flea markets to handmade crafts. Your approach to home management is anything but conventional; you thrive on unexpected details and creative touches. While your space might not always adhere to strict organization, its energy and character make it a truly special place, brimming with personality and charm.',
                compatibilities: [
                    { type: 'Tech-Savvy Strategists', description: 'Strategists and Collectors may clash over structure, but finding mutual respect over creativity and innovation can lead to a harmonious home.', imageUrl: tecSav },
                    { type: 'Efficient Minimalists', description: 'Minimalists might find Collectors\' spontaneity challenging, but focusing on each others’ strengths to build a vibrant home filled with both practicality and creativity will bring you happiness.', imageUrl: effMin },
                    { type: 'Cozy Comforters', description: 'Collectors and Comforters can create a lively, warm home full of personal touches and creative expressions. This duo likely throws the best parties in town!', imageUrl: cozCom }
                ]
            };
        }
    };

    const personality = getPersonalityType(score);

    const getShareText = () => {
        const link = "https://liukevinn.github.io/coexistCompatabilityChallenge/";
        switch (personality.type) {
            case 'Tech-Savvy Strategist':
                return `Tech-Savvy Strategist\nI just took a quiz to find out my home management style, and it turns out I’m a Tech-Savvy Strategist! Which means I love using gadgets and planning to keep everything running smoothly at home. 🏡 Think you’re the same or different? Give it a try! ${link}`;
            case 'Cozy Comforter':
                return `Cozy Comforter\nI just took a quiz to find out my home management style, and it turns out I’m a Cozy Comforter! Which means my home is all about warmth and inviting vibes. 🛋 Think you’re the same or different? Give it a try! ${link}`;
            case 'Efficient Minimalist':
                return `Efficient Minimalist\nI just took a quiz to find out my home management style, and it turns out I’m an Efficient Minimalist! Which means I keep things simple and functional at home. 🧹 Think you’re the same or different? Give it a try! ${link}`;
            case 'Creative Collector':
                return `Creative Collector\nI just took a quiz to find out my home management style, and it turns out I’m a Creative Collector! Which means my home is a canvas filled with unique treasures. 🎨 Think you’re the same or different? Give it a try! ${link}`;
            default:
                return '';
        }
    };

    const handleShareFacebook = () => {
        const shareText = getShareText();
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareText), '_blank');
    };

    const handleShareLinkedIn = () => {
        const shareText = getShareText();
        window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareText), '_blank');
    };

    const handleCopyLink = () => {
        const currentUrl = document.location.href;
        navigator.clipboard.writeText(currentUrl)
            .then(() => alert('Link copied to clipboard!'))
            .catch(err => alert('Failed to copy link: ', err));
    };

    return (
        <div>
            <div className={styles.container}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '500px' }}>
                    <h2 style={{ textTransform: 'lowercase' }}>
                        your result:<br />
                        {personality.type}
                    </h2>

                    <img src={personality.imageUrl} className={styles.compatibilityImage} alt={personality.type} />

                    <p className={styles.description}>{personality.blurb}</p>
                </div>

                <div className={styles.shareContainer}>
                    <h2>share your results:</h2>
                    <div className={styles.icons}>
                        <button onClick={handleShareFacebook}><Facebook /></button>
                        <button onClick={handleShareLinkedIn}><LinkedIn /></button>
                        <button onClick={handleCopyLink}><Link /></button>
                    </div>
                </div>
            </div>

            <div className={styles.compatibility}>
                <h2>your compatibility with...</h2>
                {personality.compatibilities.map((comp) => (
                    <div key={comp.type} className={styles.compatibilityItem}>
                        <img src={comp.imageUrl} alt={comp.type} className={styles.compatibilityImage} />
                        <div>
                            <strong>{comp.type}:</strong> {comp.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScoreComponent;
