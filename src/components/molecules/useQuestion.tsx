import ResultButton from "../atoms/ResultButton";
import Question from "../atoms/Question";
import React, { useState, useRef, useEffect } from "react";
interface Message {
    user: string;
    bot: string;
  }
const useQuestion = () => {
  const [userMessage, setUserMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
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
  const changeUserMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };
  return (
    <div>
      <Question 
            userQuestion={userMessage}
            onChange={changeUserMessage}
            placeholder="Type your message..."/>
      <ResultButton name="Result" onClick={handleSubmit} />
    </div>
  );
};
