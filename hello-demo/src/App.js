import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>欢迎来到React世界</h2>
            </header>
            <p className="App-intro">
                你可以在 <code>src/App.js</code> 文件中修改。
            </p>
        </div>
    );
}

export default App;
