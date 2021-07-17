function filterUsers(users, key, onlyActive) {
  let res = [];

  if (!key) {
    res = users;
  } else {
    res = users.filter((user) => {
      const {
        username,
        firstName = user.first_name,
        lastName = user.last_name,
      } = user;

      return (
        String(username).toLowerCase().indexOf(key.toLowerCase()) !== -1
        || String(firstName).toLowerCase().indexOf(key.toLowerCase()) !== -1
        || String(lastName).toLowerCase().indexOf(key.toLowerCase()) !== -1
      );
    });
  }

  return onlyActive
    ? res.filter((user) => user.is_active)
    : res;
}

export default filterUsers;
