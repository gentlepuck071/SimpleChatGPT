"use client";

import React from "react";

interface QuestionOrAnswerProps {
    text: string;
}

const QuestionOrAnswer: React.FC<QuestionOrAnswerProps> = (props) => {
    return <div>{props.text}</div>;
};

export default QuestionOrAnswer;
