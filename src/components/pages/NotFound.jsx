import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="center">
        <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
        <h1>Page Not Found</h1>
        <p>The requested page does not exist.</p>
      </div>
    </div>
  );
};
export default NotFound;
