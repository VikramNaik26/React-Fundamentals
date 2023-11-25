import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    author: 'Rebecca Yarror',
    title: 'Fourth Wing (The Empyrean, 1)',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },

  {
    author: 'Mathew Perry',
    title: 'Friends, Lovers, and the Big Terrible Thing: A Memoir',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },

  {
    author: 'Suzanne Collins',
    title:
      'The Ballad of Songbirds and Snakes (A Hunger Games Novel) (The Hunger Games)',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61k7JqSWOUL._AC_UL600_SR600,400_.jpg',
    id: 3,
  },

  {
    author: 'James Clear',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    img: 'https://images-na.ssl-images-amazon.com/images/I/812eE1lO0dL._AC_UL600_SR600,400_.jpg',
    id: 4,
  },
]

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

/* const Book = ({ book: { img, title, author } }) => {
  // const { img, title, author } = props.book
  return (
    <article className="book">
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />
    </article>
  )
} */

const Image = (props) => <img src={props.img} alt={props.title} />
const Title = (props) => <h2>{props.title}</h2>
const Author = (props) => {
  return <h4>{props.author}</h4>
}

/* const bookList = books.map((book) => {
  const { img, title, author, id } = book
  // console.log(img, title, author)
  return <Book img={img} title={title} author={author} key={id} />
  /* return <div>
    <h2>data</h2>
  </div> 
}) */

const bookList = books.map((book) => {
  // const { img, title, author, id } = book
  // console.log(img, title, author)
  // return <Book book={book} key={book.id} />
  /* const displayValue = () => {
    console.log('value')
  } */
  // return <Book {...book} key={book.id} displayValue={displayValue} />

  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return <Book {...book} key={book.id} getBook={getBook} />
  /* return <div>
    <h2>data</h2>
  </div> */
})

const BookList = () => {
  return <section className="booklist">{bookList}</section>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />)
root.render(<BookList />)
