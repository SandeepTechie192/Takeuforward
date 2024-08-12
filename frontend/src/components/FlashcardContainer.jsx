// src/components/FlashcardContainer.jsx
import React, { useState } from 'react';
import Flashcard from './Flashcard.jsx';
import Dashboard from './Dashboard.jsx';

const FlashcardContainer = () => {
  const [flashcards, setFlashcards] = useState([
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { question: 'What is JSX?', answer: 'A syntax extension for JavaScript that resembles HTML.' },
    { question: 'What is a component?', answer: 'Reusable pieces of UI in a React application.' },
  ]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
    );
    setIsFlipped(false); // Reset flip state when changing cards
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false); // Reset flip state when changing cards
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleToggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={handleToggleDashboard}
        className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        {showDashboard ? 'Back to Flashcards' : 'Open Dashboard'}
      </button>

      {showDashboard ? (
        <Dashboard flashcards={flashcards} setFlashcards={setFlashcards} />
      ) : (
        <>
          <Flashcard
            question={flashcards[currentCardIndex].question}
            answer={flashcards[currentCardIndex].answer}
            onFlip={handleFlip}
            isFlipped={isFlipped}
          />
          <div className="flex space-x-4 mt-8">
            <button
              onClick={handlePrevious}
              className={`font-bold py-2 px-4 rounded text-white transition-colors duration-300 ${
                isFlipped ? 'bg-green-600 hover:bg-green-800' : 'bg-blue-600 hover:bg-blue-800'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className={`font-bold py-2 px-4 rounded text-white transition-colors duration-300 ${
                isFlipped ? 'bg-green-600 hover:bg-green-800' : 'bg-blue-600 hover:bg-blue-800'
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FlashcardContainer;
