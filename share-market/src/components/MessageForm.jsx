import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MessageForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message here..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MessageForm;
