import {useState} from "react";

function Example5() {
    return(
        <Test/>
    )
}
// 知识点：
// 1. 掌握useState的语法
// 2. useState 用来参控传递进去的参数
// 需求：
// 1. 创建一个文本标签”hello world“和一个按钮
// 2. 点击按钮后，会将文本标签变成”Random Test“;再次点击变成”hello world“，以此往复

function Test(){
    //useState 返回两个值{任意数据， 函数}
    //这个例子，数据为”hello world“
    //返回的值 赋给 name， setText
    const [name, setText] = useState("hello world")
    const clickEvent = () =>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        if(name === 'Random Test') {
            setText("hello world")
        } else {setText("Random Test")}
    };

    return (
        <div>
            <h1>{name}</h1>
            <button type="button" onClick={clickEvent}>
                click
            </button>
        </div>

    )
}

export default Example5;