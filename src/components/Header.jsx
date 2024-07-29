import React from 'react';
import { Button, Typography } from '@mui/material';

const Header = ({ onPreviousQuestion, questionFraction, coexistUrl }) => {
    const headerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    };

    const buttonStyles = {
        textTransform: 'none', // Ensure text is not transformed to uppercase
        fontFamily: '"Lexend", sans-serif',
        fontSize: '1rem',
        color: 'inherit', // Inherit color from the parent element
        marginLeft: '2vw'
    };

    const fractionStyles = {
        textAlign: 'center',
        fontSize: '1rem',
        fontFamily: '"Lexend", sans-serif'
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
                coexist
            </Button>
        </div>
    );
};

export default Header;
