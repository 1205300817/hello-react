import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './example/Hello';
import Hello2 from './example/Hello2';
import Hello3 from './example/Hello3';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

Hello3.defaultProps={
    name : '中国人'
}

const tickElement =
    <div>
        <Hello/>
        <hr/>
        <Hello2 date={new Date()}/>
        <hr/>
        <Hello3 score={90}/>
    </div>
    /*严格模式*/
    /*React在严格模式下会执行两次render以帮忙检查额外的副作用*/
    // <React.StrictMode>
    //     <Hello/>
    //     <hr/>
    //     <Hello2 date={new Date()}/>
    //     <hr/>
    //     <Hello3 date={new Date()} score={90}/>
    // </React.StrictMode>

function tick() {
    ReactDOM.render(
        tickElement,
        document.getElementById('example')
    );
}

// 定时更新界面，每秒钟调用一次 ReactDOM.render()。
// setInterval(tick, 1000);
tick()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
