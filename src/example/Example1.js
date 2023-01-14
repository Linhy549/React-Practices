function Example1() {
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
    return(
        <div>
            <h1 className="title">{props.title}</h1>
            <h2 className="author">{props.author}</h2>
        </div>
    )
}
export default Example1;