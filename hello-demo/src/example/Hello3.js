import React from "react";

export default class Clock extends React.Component {
    // 样式
    styleHello3 = {
        fontSize: 50,
        color: '#00f2ff'
    }

    htmlArr = [
        <h1 key={1001}>菜鸟教程</h1>,
        <h2 key={1002}>学的不仅是技术，更是梦想！</h2>
    ]

    constructor(props) {
        super(props);
        console.log("函数调用：{}, 参数：{}", "constructor", props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        console.log("函数调用：{}", "componentDidMount")
        this.timerID = setInterval(() => this.tick(), 1000)

        this.closureTest()
    }

    componentWillUnmount() {
        console.log("函数调用：{}", "componentWillUnmount")
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                {/*此为注释*/}
                <h1>Hello, world! ——Hello3</h1>
                <h1>Hello, {this.props.name}</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
                <h3>10+1 = {10 + 1}</h3>
                <h3 style={this.styleHello3}>本次考试成绩：{this.props.score}，是否及格：{this.props.score > 60 ? '及格' : '不及格'}</h3>
                <h3>1. 下面进行html 数组渲染，数组长度：{this.htmlArr.length}</h3>
                <div>{this.htmlArr}</div>
            </div>
        );
    }

    // 标准的闭包函数
    A() {
        let i = 0;
        return function b() {
            return (++i);
        };
    };

    closureTest() {
        // 标准闭包
        let a = this.A();
        console.log("标准闭包测试------------")
        console.log(a());
        console.log(a());

        // 箭头函数体闭包
        let B = (i = 0) => () => (++i);
        let b = B();
        console.log("箭头函数体闭包测试------------")
        console.log(b());
        console.log(b());

        // 箭头函数递归
        let fact = (x) => (x == 0 ? 1 : x * fact(x - 1));
        console.log("箭头函数递归测试------------")
        console.log(fact(5));

    }
}
