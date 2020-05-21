import React from 'react';
import logo from './logo.svg';
import './App.css';
//electron 调用 NativeAPI 多进程架构
// Inter-Process Communication,进程间通信
//electron 不支持 import
//create-react-app 0配置启动 reject
import {ipcRenderer} from 'electron';
function App() {
  return (
    <div className="App">
      <h1>Hello word</h1>
    </div>
  );
}

export default App;
