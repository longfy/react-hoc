import React from 'react';
import A from './components/A'
import B from './components/B'
import C from './components/C'
import E from './components/E'
import F from './components/F'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <B name={'张三'} age={18} />
      <C/>
      <E/>
      <F/>
    </div>
  );
}

export default App;
