import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMessages } from '../services/messages';
import MessageForm from './MessageForm';

function MessageList({ currentUser }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const messages = await getMessages();
      setMessages(messages);
    }

    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      <MessageForm currentUser={currentUser} setMessages={setMessages} />
      {messages.length > 0 ? (
        <ul>
          {messages.map((message) => (
            <li key={message._id}>
              <strong>{message.user.username}: </strong>
              {message.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No messages yet.</p>
      )}
    </div>
  );
}

MessageList.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default MessageList;
