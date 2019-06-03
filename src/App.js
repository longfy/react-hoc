import React from 'react';
import RouterMap from './router'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import E from './components/E'
import F from './components/F'
import Tabbar from './components/tabbar'
import logo from './logo.svg';
import './App.css';
import './static/fonts/iconfont.css'

function App() {
  return (
    <div className="App">
      {/* <B name={'张三'} age={18} />
      <C/>
      <E/>
      <F/> */}
      {/* <Tabbar/> */}
      <RouterMap />
    </div>
  );
}

export default App;
