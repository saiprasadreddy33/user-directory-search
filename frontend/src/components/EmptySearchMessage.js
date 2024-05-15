import React from 'react';
import styles from './EmptySearchMessage.module.css';

const EmptySearchMessage = () => {
  return (
    <div className={styles.messageContainer}>
      <p>Please enter a search query to find users.</p>
    </div>
  );
};

export default EmptySearchMessage;