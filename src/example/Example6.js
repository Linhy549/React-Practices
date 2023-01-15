import {useState} from "react";


function Example6() {
    return(
        <Test/>
    )
}
// 知识点：
// 1. 掌握useState,对数组的控制
// 需求：
// 1. 一组Book数组，里面有3个元素，每个元素属性是（id，title，author）
// 2. 每个对象有个按钮，功能：每点击一次按钮，删除该元素元素，

const data = [
    {id:1, title:"西游记" ,author:"Tom"},
    {id:2, title:"三国演义" ,author:"Jack"},
    {id:3, title:"水浒传" ,author:"Annie"}
]

function Test(){
    const [books, setBook] = useState(data)
    const clickEvent = (id) =>{
        let temp = books.filter((book)=> book.id !== id)
        setBook(temp)
    }
    return (
        <div>
            <div>
                {
                    books.map((book) =>{
                        const {id, title, author} = book
                        return(
                            <div key={id}>
                                <h1>{title}</h1>
                                <h2>{author}</h2>
                                <button onClick={()=>clickEvent(id)
                                }>click</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Example6;