import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendItem.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
  const status = state => (state ? styles.IsOnline : styles.IsOffline);
  return (
    <>
      <span className={status(isOnline)}>{isOnline}</span>
      <img className={styles.Avatar} src={avatar} alt={name} width="48" />
      <p className={styles.Name}>{name}</p>
    </>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
