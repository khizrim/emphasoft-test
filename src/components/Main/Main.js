import React from 'react';

import Header from '../Header/Header';
import UsersList from '../UsersList/UsersList';
import Footer from '../Footer/Footer';

function Main(props) {
  const { isLoggedIn, onSignOut, users } = props;
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onSignOut={onSignOut}
      />
      <UsersList
        users={users}
      />
      <Footer />
    </>
  );
}

export default Main;
