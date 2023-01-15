function Example4() {
    return(
        <BookList/>
    )
}
// 知识点：
// 1. 掌握event的基本用法 （attribute，eventHandler）
// 2. 匿名函数在attribute的用法
// 需求：
// 1. 在每个Book中添加一个button
// 2. button被点击后显示该书籍的名字

const bookList = [
    {
        id: 1,
        title: "西游记",
        author: "罗贯中"
    },
    {
        id: 2,
        title: "红楼梦",
        author: "曹雪芹"
    }
];

const BookList = () => {
    return (
        <section>
            {
                //map函数遍历整个bookList
                //map函数中参数是 一个函数
                bookList.map((book, index)=>{
                    //如果不加key，
                    return <Book key={book.id} book={book}/>
                })
            }
        </section>
    )
}
const Book = (props) => {
    // 因为props是object类型，可以将数据封装
    const {title, author} = props.book
    const clickEvent = (title) => {
            alert('Title:' + title)
            console.log(title)
    }
    const moveEvent = () => console.log('MovingOver + ' + author)
    //绑定event事件不同的用法
    return(
        <div>
            <h1 className="title" onClick={() =>{console.log('Clicking + ' + title)}}>{title}</h1>
            <h2 className="author" onMouseOver={moveEvent}>{author}</h2>
            <button type="button" onClick={() => {
                clickEvent(title)
            }}>click</button>
        </div>
    )
}
export default Example4;