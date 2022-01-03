import React from 'react';
import { API_ERROR_MESSAGE } from '../../utils/constants';
import './ErrorMessage.styles.css'

export default function ErrorMessage(props) {
  const { msg } = props;  
  return (
    <div data-testid="error-message">
      <p className="error-message">{API_ERROR_MESSAGE}</p>
      <p className="error-message-red">{msg}</p>  
    </div>
  );
}
