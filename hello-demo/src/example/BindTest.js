import React from "react";

let module2 = {
    x: 88,
    getX: function() { return this.x; }
}

class BindTest extends React.Component {

    constructor(props) {
        super(props);
        this.x=9
    }
    handleClick() {
        console.log("BindTest测试----------------");
        console.log(module2.getX());// 期望 88
        let retrieveX = module2.getX;
        console.log(retrieveX());// 期望 9
        let bindX = module2.getX.bind(this);
        console.log(bindX());// 期望 88
    }

    render() {
        return (<button onClick={this.handleClick}>BindTest测试</button>);
    }

}

export default BindTest;