import React from 'react';

import filterUsers from '../../utils/filterUsers';

import SearchForm from '../SearchForm/SearchForm';
import UserCard from '../UserCard/UserCard';

import './UsersList.css';

function UsersList(props) {
  const { users } = props;

  const [searchKey, setSearchKey] = React.useState('');
  const [activeUsersOnly, setActiveUsersOnly] = React.useState(false);
  const [shownUsers, setShownUsers] = React.useState([]);
  const [isNothingFound, setIsNothingFound] = React.useState(false);

  const handleActiveUsersOnly = (e) => {
    setActiveUsersOnly(e.target.checked);
    localStorage.setItem('activeUsersOnly', e.target.checked);
  };

  const handleSearchQuery = (key) => {
    setSearchKey(key);
    localStorage.setItem('searchKey', key);
  };

  const handleSearchFormReset = () => {
    setSearchKey(null);
    setIsNothingFound(false);
    localStorage.removeItem('searchKey');
  };

  React.useEffect(() => {
    setActiveUsersOnly(localStorage.getItem('activeUsersOnly') === 'true');
    setSearchKey(localStorage.getItem('searchKey'));
  }, [searchKey, activeUsersOnly]);

  React.useEffect(() => {
    const filteredUsers = filterUsers(users, searchKey, activeUsersOnly);

    !filteredUsers.length ? setIsNothingFound(true) : setIsNothingFound(false);

    setShownUsers(filteredUsers);
  }, [searchKey, activeUsersOnly]);

  return (
    <section className="users-list">
      <h1 className="users-list__title">Users List</h1>
      <SearchForm
        checkBoxState={activeUsersOnly}
        onCheck={handleActiveUsersOnly}
        onSubmit={handleSearchQuery}
        onReset={handleSearchFormReset}
      />
      {isNothingFound ? (
        <p className="users-list__message">Nothing Found</p>
      ) : (
        <div className="users-list__grid">
          {shownUsers
            .sort((a, b) => a.id - b.id)
            .map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
        </div>
      )}
    </section>
  );
}

export default UsersList;
