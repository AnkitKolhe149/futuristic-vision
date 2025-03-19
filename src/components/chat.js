import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = async () => {
    if (!message) return;

    const userMessage = { role: 'user', content: message };
    setChatHistory((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', { message });
      const aiMessage = { role: 'ai', content: response.data.reply };
      setChatHistory((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Error sending message:", err);
    }

    setMessage('');
  };

  return (
    <div className="chat">
      <h2>AI Chat Support</h2>
      <div className="chat-window">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;