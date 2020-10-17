import React from "react";

export default class Clock extends React.Component {
    // 样式
    styleHello3 = {
        fontSize: 50,
        color: '#00f2ff'
    }

    htmlArr=[
        <h1>菜鸟教程</h1>,
        <h2>学的不仅是技术，更是梦想！</h2>
    ]

    render() {
        return (
            <div>
                {/*此为注释*/}
                <h1>Hello, world! ——Hello3</h1>
                <h2>现在是 {this.props.date.toLocaleTimeString()}.</h2>
                <h3>10+1 = {10 + 1}</h3>
                <h3 style={this.styleHello3}>本次考试成绩：{this.props.score}，是否及格：{this.props.score > 60 ? '及格' : '不及格'}</h3>
                <h3>1. 下面进行html 数组渲染，数组长度：{this.htmlArr.length}</h3>
                <div>{this.htmlArr}</div>
            </div>
        );
    }
}
