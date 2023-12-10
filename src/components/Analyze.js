// Analyze.js
import React, { useState } from 'react';
import axios from 'axios';

const Analyze = ({ token }) => {
  const [prompt, setPrompt] = useState('');
  const [score, setScore] = useState('');
  const [label, setLabel] = useState('');

  const handleSendRequest = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_YOUR_BACKEND_URL + '/predict',
        {
          prompt,
        },
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Request successful:', response.data);
      setScore(response.data[0].score);
      setLabel(response.data[0].label);
      // setResponse(response.data);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Analyze</h2>
      <input
        className="w-full border rounded-md py-2 px-3 mb-4"
        type="text"
        placeholder="Enter prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        onClick={handleSendRequest}
      >
        Send Request
      </button>
      {score && label && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Response:</h3>
          <p>
            Score : <span className="font-bold">{score}</span>
          </p>
          <p>
            Label : <span className="font-bold">{label}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export{ Analyze};
