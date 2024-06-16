"use client"

import React, { useState } from "react"
import UserQuestion from "../molecules/UserQuestion"
import BotResponse from "../molecules/BotResponse"

interface ResultProps {
    userText: string;
    botText: string;
}
const Result: React.FC<ResultProps> = (props) => {

    return (
        <div className="w-full">
            {props.userText && <div>
                <UserQuestion
                    userText={props.userText}
                />
            </div>}
            {props.botText && <div>
                <BotResponse
                    botText={props.botText}
                />
            </div>}
        </div>
    );
}

export default Result;