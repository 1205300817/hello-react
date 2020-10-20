import React from "react";

export default class Clock extends React.Component {

    handleClick = () => {
        console.log('this is: ', this)
    }

    preventPop(name, e) {    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }

    render() {
        return (
            <div>
                {/*此为注释*/}
                <h1>Hello, {this.props.name}</h1>
                <button onClick={this.handleClick}>Click me</button>
                <div></div>
                <a href='https://reactjs.org' onClick={this.preventPop.bind(this, this.props.name)}>A Click</a>
            </div>
        );
    }
}
