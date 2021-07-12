import React from 'react';

import Header from '../Header/Header';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header isLoggedIn />
      </div>
    </div>
  );
}

export default App;
