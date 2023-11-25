const Book = (props) => {
  // const { img, title, author, displayValue } = props
  const { img, title, author, getBook, id } = props
  const getSingleBook = () => {
    getBook(id)
  }
  /*  const displayTitle = () => {
      console.log(title)
    } */
  return (
    <article className="book">
      <Image img={img} />

      <Title title={title} />
      {/* <button onClick={displayTitle}>display title</button> */}
      {/* <button onClick={displayValue}>click me</button> */}
      {/* <button onClick={getBook}>click me</button> */}
      {/* returns undefined so wrap the function with another function */}
      <button onClick={getSingleBook}>click me</button>
      <Author author={author} />
    </article>
  )
}

const Image = (props) => <img src={props.img} alt={props.title} />
const Title = (props) => <h2>{props.title}</h2>
const Author = (props) => {
  return <h4>{props.author}</h4>
}

export default Book
