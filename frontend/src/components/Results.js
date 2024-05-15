import React, { useState } from 'react';
import styles from './Results.module.css';

const Results = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className={styles.resultsContainer}>
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.login.uuid}
            className={styles.userCard}
            onClick={() => handleUserClick(user)}
          >
            <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
            <p>
              {user.name.first} {user.name.last}
            </p>
          </div>
        ))
      ) : (
        <p className={styles.noResultsMessage}>No user found for your search.</p>
      )}

      {selectedUser && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <img src={selectedUser.picture.large} alt={`${selectedUser.name.first} ${selectedUser.name.last}`} />
            <p>
              <strong>Name:</strong> {selectedUser.name.first} {selectedUser.name.last}
            </p>
            <p>
              <strong>City:</strong> {selectedUser.location.city}
            </p>
            <p>
              <strong>Age:</strong> {selectedUser.dob.age}
            </p>
            <p>
              <strong>Phone:</strong> {selectedUser.phone}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Nationality:</strong> {selectedUser.nat}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
