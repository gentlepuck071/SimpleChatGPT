"use client";

import React, { useState, useRef, useEffect } from "react";
import Avatar from "../atoms/Avatar";
import ResultButton from "../atoms/ResultButton";
import UserQuestion from "./userQuestoin";
interface Message {
  user: string;
  bot: string;
}

const ResultGPT: React.FC = () => {
  const [userMessage, setUserMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
        isFirstRender.current = false;
        // Check if page was refreshed
        if (sessionStorage.getItem('pageRefreshed')) {
            sessionStorage.removeItem('pageRefreshed');
        } else {
            scrollToBottom(); // Scroll to bottom on initial render if not a refresh
        }
    } else {
        scrollToBottom(); // Scroll to bottom when messages change
    }
}, [messages]);
  const changeUserMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  const handleSubmit = async () => {
    if (!userMessage) return;

    const newMessage = { user: userMessage, bot: "" };
    setMessages([...messages, newMessage]);
    setUserMessage("");

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botMessage = data.result;

      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1
            ? { ...msg, bot: botMessage.content }
            : msg
        )
      );
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 justify-center">
      <div className="w-full max-w-lg flex flex-col justify-center items-center">
        <div className="flex w-[20rem]">
          <input
            type="text"
            value={userMessage}
            onChange={changeUserMessage}
            placeholder="Type your message..."
            className="w-full p-2 border rounded"
          />

          <ResultButton name="Result" onClick={handleSubmit} />
        </div>
        <div className="bg-white shadow-xl rounded p-4 mb-4 h-[30rem] overflow-y-auto w-[60rem] mt-10">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <div className="text-blue-700 flex mt-4  items-center">
                <Avatar user="user" />
                <strong>User:</strong> {message.user}
              </div>
              <div className="text-green-700 flex mt-4 items-center justify-end">
                <Avatar user="bot" />
                <strong>Bot:</strong> {message.bot}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

export default ResultGPT;
