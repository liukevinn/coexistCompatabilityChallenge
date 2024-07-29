import React from 'react';
import './DownloadButtons.css'; // Ensure the correct path to your CSS file

const DownloadButtons = () => {
    return (
        <div className="download-buttons-container">
            <h2>Try 2 Weeks Free</h2>
            <div className="buttons">
                <a href="https://www.apple.com/app-store/" className="apple-store">
                    <img src="/path/to/apple-logo.png" alt="Apple Store" />
                    <span>Download on the App Store</span>
                </a>
                <a href="https://play.google.com/store" className="google-play">
                    <img src="/path/to/google-play-logo.png" alt="Google Play" />
                    <span>Get it on Google Play</span>
                </a>
            </div>
        </div>
    );
};

export default DownloadButtons;
