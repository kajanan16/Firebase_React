import React from 'react';
import logo from './logo.svg';
import './App.css';
import Survey from './survey.js';
import Auth from './Auth.js';
import Header from './header';


function App() {
  return (
    <div className="App">
<Header/>
      <Auth/>
    </div>
  );
}

export default App;
