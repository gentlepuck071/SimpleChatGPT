"use client";

import React, { ChangeEvent, useState, KeyboardEvent } from "react";

interface QuestionInputProps {
    width: number;
    height: number;
    changeUserMessage: (messages: string) => void;
    changeMessages: () => void;
    handleSubmit: () => void;
}

const QuestionInput: React.FC<QuestionInputProps> = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        props.changeUserMessage(e.target.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.handleSubmit();
            setInputValue('');
            props.changeMessages();
        }
    };

    return (
        <input
            type="text"
            placeholder="Enter Message..."
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            style={{ width: `${props.width}px`, height: `${props.height}px` }}
            className="border px-2"
        />
    );
};

export default QuestionInput;
