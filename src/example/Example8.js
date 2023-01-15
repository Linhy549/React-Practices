import {useState} from "react";


function Example8() {
    return(
        <Test/>
    )
}
// 知识点：
// 1. 掌握useState,对Object的控制
// 需求：
// 1. 设计一个计数器
// 2.

const data = {
    id:1, title:"西游记" ,author:"Tom"
}

function Test(){
    //此时 data是object类型
    const [count, setBook] = useState(0)
    const clickEvent = () =>setBook(count+1)
    const clickEvent2 = () =>setBook(0)
    const clickEvent3 = () =>setBook(count-1)
    return (
        <div>
            <h1>计数器</h1>
            <h2>{count}</h2>
            <button onClick={clickEvent}>increase</button>
            <button onClick={clickEvent2}>reset</button>
            <button onClick={clickEvent3}>decrease</button>
        </div>

    )
}

export default Example8;