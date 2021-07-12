//* Core
import React from 'react';
//* Components
import Container from './Container/Container';
import Profile from './social-profile/Profile';
import Statistic from './statistics/Statistic';
import FriendList from './friend-list/FriendList';
import TransactionHistory from './transaction-history/TransactionHistory';

//* Data
import statisticalData from '../data/statisticalData.json';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transaction from '../data/transactions.json';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistic title="Upload Stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transaction} />
  </div>
);

export default App;

/* <Statistics title="Upload Stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transaction} />*/
