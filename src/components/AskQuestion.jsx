import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  Message,
  MessageList,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export default function AskQuestion() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Smith, How may I assist you Today?",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing", // message sent by the user
    };

    const newMessages = [...messages, newMessage]; // all old messages and new ones

    // update messages state
    setMessages(newMessages);

    // set a typing Indicator (user is typing)
    setTyping(true);
    // process message to AI (send it for a response)
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like I am a 10 years old",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    let attempts = 0;
    const maxAttempts = 5;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    while (attempts < maxAttempts) {
      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
          }
        );

        if (response.status === 429) {
          attempts++;
          const waitTime = Math.pow(2, attempts) * 1000;
          console.warn(
            `Rate limit hit, retrying in ${waitTime / 1000} seconds...`
          );
          await delay(waitTime);
          continue;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Log the entire response for debugging

        if (data.choices && data.choices.length > 0) {
          const chatGPTMessage = {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
            direction: "incoming",
          };
          setMessages((prevMessages) => [...prevMessages, chatGPTMessage]);
        } else {
          console.error("Invalid response structure:", data);
        }

        setTyping(false);
        break; // Exit loop if successful
      } catch (error) {
        console.error("Error:", error);
        if (attempts >= maxAttempts) {
          setTyping(false);
          alert(
            "Failed to communicate with the server. Please try again later."
          );
        }
      }
    }
  }

  return (
    <div className="chatbot" style={{ marginTop: "2rem" }}>
      <div className="chat">
        <h3 style={{ textAlign: "center" }}>
          Ask Smith anything concerning Health, <br /> he's here to assist you
        </h3>
        <p style={{ textAlign: "center" }}>From simple to complex questions</p>
      </div>
      <div
        style={{
          position: "relative",
          height: "500px",
          width: "70%",
          margin: "0 auto",
          display: "block",
          padding: "20px",
        }}
      >
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {typing ? <TypingIndicator content="Smith is typing" /> : null}
              {messages.map((message, i) => (
                <Message key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput
              placeholder="Type your question here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}
