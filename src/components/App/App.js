import React from 'react';

import { Route, Switch, useHistory } from 'react-router';
import api from '../../utils/api';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Login from '../Login/Login';

import './App.css';

function App() {
  const history = useHistory();

  const [users, setUsers] = React.useState([]);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isChecking, setIsChecking] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const [buttonState, setButtonState] = React.useState('');
  const [infoMessage, setInfoMessage] = React.useState({
    isShown: false,
    type: '',
    code: 200,
  });

  React.useEffect(() => {
    (async () => {
      try {
        setIsChecking(true);
        const userToken = localStorage.getItem('token');
        if (userToken) {
          const res = await api.checkAndGet(userToken);
          if (res) {
            setIsLoggedIn(true);
            setUsers(res);
            history.push('/');
          }
        }
      } catch (err) {
        setIsLoggedIn(false);
        history.push('/signin');
      } finally {
        setIsChecking(false);
      }
    })();
  }, [history]);

  function handleLoading(loading, text) {
    if (loading) {
      setButtonState(text);
    } else {
      setButtonState('');
    }
  }

  const handleSignIn = async (username, password) => {
    try {
      setIsSubmitting(true);
      handleLoading(true, 'Signing In...');
      const user = await api.signInUser({
        username,
        password,
      });

      const res = await api.checkAndGet(user.token);

      localStorage.setItem('token', user.token);
      setUsers(res);
      setIsLoggedIn(true);
      history.push('/');
    } catch (err) {
      setInfoMessage({
        ...infoMessage,
        isShown: true,
        code: err.status,
        type: 'signin',
      });
    } finally {
      setIsSubmitting(false);
      handleLoading(false);
    }
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    localStorage.clear();
    setIsLoggedIn(false);
    history.push('/');
  };

  return (
    <div className="app">
      <div className="app__container">
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            isLoggedIn={isLoggedIn}
            isChecking={isChecking}
            component={Main}
            users={users}
            onSignOut={handleSignOut}
          />
          <Route path="/signin">
            <Login
              isSubmitting={isSubmitting}
              buttonState={buttonState}
              infoMessage={infoMessage}
              onSubmit={handleSignIn}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
