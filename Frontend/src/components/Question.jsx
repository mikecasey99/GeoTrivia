import React, { useState } from 'react';
import ReactCountryFlag from "react-country-flag";
import { countryHelper } from '../../countryHelper';

const Question = ({ questionDetails, onNext }) => {
  const [selected, setSelected] = useState(null);

  const getCountryCode = (countryName) => {
    return countryHelper[countryName] || 'UN';
  };

  const handleClick = (choice) => {
    if (selected) return;
    console.log('Clicked:', choice, 'Correct answer:', questionDetails.answer);
    setSelected(choice);

    setTimeout(() => {
      setSelected(null);
      onNext();
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100 p-4 sm:p-4 p-6">
      <h1 className="text-xl sm:text-[3.2em] leading-[1.1] font-bold text-gray-800 mb-6 sm:mb-8 text-center max-w-xs sm:max-w-2xl px-2 sm:px-0">
        {questionDetails.question}
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-xs sm:max-w-4xl justify-items-center px-4 sm:px-0">
        {questionDetails.choices.map((choice, index) => {
          const isCorrect = choice === questionDetails.answer;
          let bgColor = 'bg-white';
          let buttonStyle = {};

          if (selected) {
            if (isCorrect) {
              bgColor = 'bg-green-300';
              buttonStyle = { backgroundColor: '#86efac' }; // green-300
            } else {
              bgColor = 'bg-red-300';
              buttonStyle = { backgroundColor: '#fca5a5' }; // red-300
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleClick(choice)}
              disabled={!!selected}
              style={buttonStyle}
              className={`group relative w-36 h-36 sm:w-48 sm:h-48 ${bgColor} rounded-lg shadow-lg border-2 border-gray-200 overflow-hidden transition-all duration-300 ${
                !selected ? 'hover:shadow-xl hover:scale-105 hover:border-blue-400' : ''
              }`}
            >
              <div className={`h-[70%] flex items-center justify-center ${!selected ? 'bg-gray-200' : ''}`}>
                <ReactCountryFlag
                  countryCode={getCountryCode(choice)}
                  svg
                  style={{
                    width: '70px',
                    height: '52px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                  className="sm:w-[80px] sm:h-[60px]"
                  title={choice}
                />
              </div>
              <div className={`h-[30%] flex items-center justify-center ${!selected ? 'bg-white' : ''}`}>
                <span className="text-sm sm:text-sm font-semibold text-gray-800 text-center px-1 sm:px-2">
                  {choice}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
