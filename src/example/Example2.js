function Example2() {
    return(
        <BookList/>
    )
}
const FirstBook = {
    title : "新华字典",
    author : "某某出版社"
}
const SecondBook = {
    title : "西游记",
    author : "罗贯中"
}
const BookList = () => {
    return (
        <section>
            <Book title={FirstBook.title} author={FirstBook.author}/>
            <Book title={SecondBook.title} author={SecondBook.author}/>
        </section>
    )
}
const Book = (props) => {
    // 因为props是object类型，可以将数据封装
    const {title, author} = props
    return(
        <div>
            <h1 className="title">{title}</h1>
            <h2 className="author">{author}</h2>
        </div>
    )
}
export default Example2;