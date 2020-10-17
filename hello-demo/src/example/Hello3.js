import React from "react";

export default class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world! ——Hello3</h1>
                <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
