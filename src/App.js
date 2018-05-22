import React from 'react';
import './App.css';
import Search from './containers/Search';
import UsersList from './containers/UsersList';

const App = () =>
  <div className="App">
    <Search />
    <UsersList />
  </div>

export default App;
