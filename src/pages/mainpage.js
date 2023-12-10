// MainPage.js
import React, { useState } from 'react';
import { Analyze } from '../components/Analyze';
import { Results } from '../components/Results';

const MainPage = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const { token } = props;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side Pane */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h3 className="text-lg font-semibold mb-4">Options</h3>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md mb-2 hover:bg-blue-600"
          onClick={() => handleOptionClick('analyze')}
        >
          Analyze
        </button>
        <button
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          onClick={() => handleOptionClick('results')}
        >
          Results
        </button>
      </div>

      {/* Right Side Content */}
      <div className="flex-1 p-4">
        {selectedOption === 'analyze' && <Analyze token={token} />}
        {selectedOption === 'results' && <Results token={token} />}
      </div>
    </div>
  );
};

export default MainPage;
