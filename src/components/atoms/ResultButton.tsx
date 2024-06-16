"use client";

import React from "react";

interface ResultButtonProps {
    buttonName: string;
    width: number;
    height: number;
    textColor: string;
    backgroundColor: string;
    changeMessages: () => void;
    handleSubmit: () => void;
}

const ResultButton: React.FC<ResultButtonProps> = (props) => {
    const handleClick = () => {
        props.changeMessages();
        props.handleSubmit();
    };

    return (
        <button
            onClick={handleClick}
            style={{ 
                width: `${props.width}px`, 
                height: `${props.height}px`,
                backgroundColor: props.backgroundColor,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            <span style={{ color: props.textColor }}>{props.buttonName}</span>
        </button>
    );
};

export default ResultButton;
