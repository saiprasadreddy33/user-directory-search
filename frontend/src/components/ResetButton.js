import React from 'react';
import './ResetButton.css';
const ResetButton = ({ onReset }) => {
  return (
    <button className="reset-button" onClick={onReset}>Reset</button>
  );
};

export default ResetButton;