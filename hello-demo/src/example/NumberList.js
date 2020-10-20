import React from "react";

export default function (props) {
    const numbers = props.numbers;
    // 法一
    // const listItems = numbers.map(
    //     (number) => <ListItem key={number.toString()} value={number}></ListItem>
    // );
    // return (<ul>{listItems}</ul>);

    // 法二
    return (
        <ul>
            {numbers.map(
                (number) => <ListItem key={number.toString()} value={number}></ListItem>
            )}
        </ul>
    )

    // 法三
    // return (
    //     <ul>
    //         {numbers.map(
    //             (number) => <li key={number.toString()}>{number}</li>
    //         )}
    //     </ul>
    // )


}

function ListItem(props) {
    return <li>{props.value}</li>;
}
