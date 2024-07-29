import React from 'react';
import { Button, Typography } from '@mui/material';
import './Header.css';  // Corrected CSS import

const Header = ({ onPreviousQuestion, questionFraction, coexistUrl }) => {
    return (
        <div className="header">
            <Button onClick={onPreviousQuestion} className="button">
                back
            </Button>
            <Typography className="fraction">
                {questionFraction}
            </Typography>
            <Button 
                className="button" 
                onClick={() => window.location.href = coexistUrl}
            >
                coexist
            </Button>
        </div>
    );
};

export default Header;
