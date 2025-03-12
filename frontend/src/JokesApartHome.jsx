// src/JokeDisplay.jsx
import React, { useState } from 'react';
import axios from 'axios';

const JokeDisplay = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(`${response.data.setup} - ${response.data.punchline}`);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke('Failed to fetch joke. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="joke-container">
      <h2>Hey check this one...</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p className="joke-text">{joke || 'Click the button to get a joke!'}</p>
      )}
      <button onClick={getJoke}>Get a Joke</button>
    </div>
  );
};

export default JokeDisplay;
