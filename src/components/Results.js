// Results.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Results = ({ token }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_YOUR_BACKEND_URL + '/data',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setResults(response.data);
      } catch (error) {
        console.error('Request failed:', error);
      }
    };

    fetchData();
  }, [token]); // Include token as a dependency to re-fetch data when the token changes

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Results</h2>
      {results.map((result, index) => (
        <div key={index} className="mb-6">
          <p className="mb-2">
            Prompt: <span className="font-bold">{result.prompt}</span>
          </p>
          <p className="mb-2">
            Label: <span className="font-bold">{result.label}</span>
          </p>
          <p className="mb-2">
            User ID: <span className="font-bold">{result.user_id}</span>
          </p>
          <p className="mb-2">
            Score: <span className="font-bold">{result.score}</span>
          </p>
          <p className="mb-2">
            ID: <span className="font-bold">{result.id}</span>
          </p>
          <p className="mb-2">
            Time: <span className="font-bold">{result.time}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export { Results};
