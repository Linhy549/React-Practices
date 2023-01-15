import {useState} from "react";


function Example7() {
    return(
        <Test/>
    )
}
// 知识点：
// 1. 掌握useState,对Object的控制
// 需求：
// 1. 修改author名字为Jack
// 2. 每个对象有个按钮，功能：每点击一次按钮，删除该元素元素，

const data = {
    id:1, title:"西游记" ,author:"Tom"
}

function Test(){
    //此时 data是object类型
    const [book, setBook] = useState(data)
    const clickEvent = () =>{
        setBook({...book, title: "Jack"})
    }
    return (
        <div>
            <h1>{book.author}</h1>
            <h1>{book.title}</h1>
            <button onClick={clickEvent}>click</button>
        </div>

    )
}

export default Example7;