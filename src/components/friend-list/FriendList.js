import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from '../friend-item/FriendItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.FriendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={styles.Item}>
        <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
