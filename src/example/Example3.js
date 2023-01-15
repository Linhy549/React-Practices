function Example3() {
    return(
        <BookList/>
    )
}

// 需求：
// 1. Book的实例用用数组管理
// 2. BookList中动态添加Book
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
                bookList.map((book)=>{
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
    return(
        <div>
            <h1 className="title">{title}</h1>
            <h2 className="author">{author}</h2>
        </div>
    )
}
export default Example3;