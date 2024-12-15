import React, { useState } from 'react';
import FunctionChain from './components/FunctionChain';
import './styles/styles.css';

const App: React.FC = () => {

  return (
    <div className="app-container">
      <FunctionChain  />
    </div>
  );
};

export default App;