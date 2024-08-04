import React from 'react';
import './DownloadButtons.css'; // Ensure the correct path to your CSS file
import pic1 from '../pictures/App Store.svg'
import pic2 from '../pictures/Google Play.svg'

const DownloadButtons = () => {
    return (
        <div className="download-buttons-container">
            <h2>try 2 weeks free</h2>
            <div className="buttons">
                <a href="https://apps.apple.com/us/app/coexist-simplify-housework/id1659744046" className="apple-store">
                    <img src={pic1} alt="Apple Store" />
                    
                </a>
                <a href="https://play.google.com/store/search?q=coexist&c=apps" className="google-play">
                    <img src={pic2} alt="Google Play" />
                   
                </a>
            </div>
        </div>
    );
};

export default DownloadButtons;
