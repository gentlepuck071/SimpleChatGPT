"use client";

import React from "react";

interface TItleProps {
    textColor: string;
    textSize: number;
    title: string;
}

const TItle: React.FC<TItleProps> = (props) => {
    return (
        <div
            style={{ color: `${props.textColor}`, fontSize: `${props.textSize}px` }}
            className="text-center">
            {props.title}
        </div>
    );
};

export default TItle;
