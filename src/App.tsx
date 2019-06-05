import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NumberConvert } from './components/NumberConvert';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NumberConvert />
      </header>
    </div>
  );
}

export default App;
