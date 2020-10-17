import React from "react";

export default function App(props) {
    return (
        <div>
            <h1>Hello, world! ——Hello2</h1>
            <h3>当前时间： {props.date.toLocaleTimeString()}.</h3>
        </div>
    );
}
