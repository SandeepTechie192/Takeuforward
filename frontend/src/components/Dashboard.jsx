// src/components/Dashboard.jsx
import React, { useState } from 'react';

const Dashboard = ({ flashcards, setFlashcards }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (question && answer) {
      const newFlashcards = [...flashcards, { question, answer }];
      setFlashcards(newFlashcards);
      setQuestion('');
      setAnswer('');
    }
  };

  const handleEdit = (index) => {
    setQuestion(flashcards[index].question);
    setAnswer(flashcards[index].answer);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    if (question && answer && editIndex !== null) {
      const updatedFlashcards = flashcards.map((fc, index) =>
        index === editIndex ? { question, answer } : fc
      );
      setFlashcards(updatedFlashcards);
      setQuestion('');
      setAnswer('');
      setEditIndex(null);
    }
  };

  const handleDelete = (index) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index);
    setFlashcards(updatedFlashcards);
  };

  

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="mb-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          className="border p-2 rounded-md w-full mb-2"
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
          className="border p-2 rounded-md w-full mb-4"
        />
        {editIndex !== null ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Flashcard
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Flashcard
          </button>
        )}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Existing Flashcards</h3>
        <ul>
          {flashcards.map((fc, index) => (
            <li key={index} className="flex items-center justify-between mb-2 p-2 border rounded-md">
              <div>
                <strong>Q:</strong> {fc.question} <br />
                <strong>A:</strong> {fc.answer}
              </div>
              <div>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
