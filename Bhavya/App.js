import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Body />
    </div>
  );
}

export default App;
