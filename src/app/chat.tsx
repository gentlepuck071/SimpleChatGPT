"use client";

import React, { useState, useRef, useEffect } from "react";
import UserAction from "@/components/molecules/UserAction";
import Result from "@/components/organisms/Result";

interface Message {
    user: string;
    bot: string;
}

const Chatting: React.FC = () => {
    const [userMessage, setUserMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        scrollToBottom(); // Scroll to bottom when messages change
    }, [messages]);

    const changeUserMessage = (userMessage: string) => {
        setUserMessage(userMessage);
    };

    const changeMessages = () => {
        setMessages([...messages, { user: userMessage, bot: '' }]);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/openai', {
                method: 'POST',
                body: JSON.stringify({ messages: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const botMessage = data.result;
            console.log(botMessage)

            setMessages([...messages, { user: userMessage, bot: botMessage.content }]);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <UserAction
                changeUserMessage={changeUserMessage}
                changeMessages={changeMessages}
                handleSubmit={handleSubmit}
            />
            <div className="w-[1000px] p-5 h-[55vh] overflow-y-auto">
                {messages.map((message: Message, index: number) => (
                    <Result
                        key={index}
                        userText={message.user}
                        botText={message.bot}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default Chatting;
