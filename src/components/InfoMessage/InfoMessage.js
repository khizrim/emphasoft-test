import React from 'react';

import './InfoMessage.css';

function InfoMessage(props) {
  const {
    isShown, code, type,
  } = props;

  const [messageText, setMessageText] = React.useState('');

  function getMessage(messageType) {
    if (messageType === 'signup') {
      return 'An error occurred on sign up';
    } if (messageType === 'signin') {
      return 'Wrong username or password';
    } if (messageType === 'update') {
      return 'An error occurred on profile update';
    }

    return 'An error occurred';
  }

  React.useEffect(() => {
    if (code === 200 || code === 201) {
      setMessageText('Data updated');
    } if (code >= 400) {
      setMessageText(getMessage(type));
    }
  }, [code, type]);

  return (
    <div className="message">
      {isShown && (
        <p className={`message__text ${code >= 400 ? 'message__text_error' : ''}`}>
          {messageText}
        </p>
      )}
    </div>
  );
}

export default InfoMessage;
