// src/components/Flashcard.jsx
import React, { useState, useEffect } from 'react';
import './Flashcard.css'; 
import axios from 'axios';

const Flashcard = ({ question, answer, onFlip, isFlipped }) => {
  const handleFlip = () => {
    onFlip();
  };

  useEffect(() => {
    axios.get('http://localhost:5000/flashcards')
      .then(response => {
        setFlashcards(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the flashcards!', error);
      });
  }, []);

  return (
    <div className="flip-card-container" onClick={handleFlip}>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <p>{question}</p>
        </div>
        <div className="flip-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
