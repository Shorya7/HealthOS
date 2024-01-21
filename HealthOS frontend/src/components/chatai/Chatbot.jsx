import React, { useState, useEffect } from "react";

import BotMessage from "./comp/BotMessage";
import UserMessage from "./comp/UserMessage";
import Messages from "./comp/Messages";
import Input from "./comp/Input";

import API from "./ChatbotAPI";

import "./Chatbot.css";
import Header from "./comp/Header";

import nav from '../../assets/Navbar.svg'
function Chatbot() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async text => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="chatbot_main">
    <div className="chatbot">
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
    </div>
  );
}
export default Chatbot;
