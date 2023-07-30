import React from 'react';

const Options = ({ options, handleOptionClick }) => {
  return (
    <div className="options-container">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option)}
          className="option-btn"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
