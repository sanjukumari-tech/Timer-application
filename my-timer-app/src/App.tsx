// src/App.tsx
import React from 'react';
import './App.css';
import Timer from './components/Timer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
      </header>
    </div>
  );
};

export default App;
