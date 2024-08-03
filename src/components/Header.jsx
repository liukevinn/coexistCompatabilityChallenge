import React from 'react';
import { Button, Typography } from '@mui/material';

const Header = ({ onPreviousQuestion, questionFraction, coexistUrl }) => {
    const headerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white'  // Added white background color
    };

    const buttonStyles = {
        textTransform: 'none', // Ensure text is not transformed to uppercase
        fontFamily: '"Lexend", sans-serif',
        fontSize: '1rem',
        color: 'black', // Changed color to black
        marginLeft: '2vw'
    };

    const fractionStyles = {
        textAlign: 'center',
        fontSize: '1rem',
        fontFamily: '"Lexend", sans-serif',
        color: 'black'  // Set text color to black
    };

    const coexistButtonStyles = {
        ...buttonStyles,
        color: '#706E9A', // Specific color for coexist button
        marginRight: '2vw'
    };

    return (
        <div style={headerStyles}>
            <Button onClick={onPreviousQuestion} style={buttonStyles}>
                back
            </Button>
            <Typography style={fractionStyles}>
                {questionFraction}
            </Typography>
            <Button 
                style={coexistButtonStyles} 
                onClick={() => window.location.href = coexistUrl}
            >
                <strong>coexist</strong>
            </Button>
        </div>
    );
};

export default Header;
