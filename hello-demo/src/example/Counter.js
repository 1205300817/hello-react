import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clickCount: 0};
        this.handleClick2 = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => {
            return {clickCount:state.clickCount + 1}
        });
        // this.setState(function(state) {
        //     return {clickCount: state.clickCount + 1};
        // });
    }

    render() {
        return (<h2 onClick={this.handleClick2}>点我！点击次数为: {this.state.clickCount}</h2>);
    }

}

export default Counter;