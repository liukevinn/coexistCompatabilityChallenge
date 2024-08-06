import React from 'react';
import { Button, Typography } from '@mui/material';

const Header = ({
  onPreviousQuestion,
  questionFraction,
  coexistUrl,
  showBackButton = true  // Default to true so the button shows unless specified
}) => {
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white'  // Ensures background is white
  };

  const buttonStyles = {
    textTransform: 'none', // No uppercase transformation
    fontFamily: '"Lexend", sans-serif',
    fontSize: '1rem',
    color: 'black', // Black color for visibility
    marginLeft: '2vw'
  };

  const fractionStyles = {
    textAlign: 'center',
    fontSize: '1rem',
    fontFamily: '"Lexend", sans-serif',
    color: 'black'  // Black for readability
  };

  const coexistButtonStyles = {
    ...buttonStyles,
    color: '#706E9A', // Distinct color for "coexist" button
    marginRight: '2vw'
  };

  return (
    <div style={headerStyles}>
      {showBackButton && (
        <Button onClick={onPreviousQuestion} style={buttonStyles}>
          back
        </Button>
      )}
      <Typography style={fractionStyles}>
        {questionFraction}
      </Typography>
      <Button 
        style={coexistButtonStyles} 
        onClick={() => window.open(coexistUrl)}
      >
        <strong>coexist</strong>
      </Button>
    </div>
  );
};

export default Header;
