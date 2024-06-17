"use client";
import React, { useState } from "react";
const UserQuestion: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedText(userInput);
    setUserInput(""); // Clear the input field after submission
  };

  return (
    <div className="user-input-container">
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="input-field"
      />
      <button onClick={handleSubmit} className="submit-button">
        Result
      </button>
      {submittedText && (
        <p className="display-text">Submitted: {submittedText}</p>
      )}
    </div>
  );
};

export default UserQuestion;
