import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

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

/* const bookList = books.map((book) => {
  const { img, title, author, id } = book
  // console.log(img, title, author)
  return <Book img={img} title={title} author={author} key={id} />
  /* return <div>
    <h2>data</h2>
  </div> 
}) */

const bookList = books.map((book, index) => {
  // const { img, title, author, id } = book
  // console.log(img, title, author)
  // return <Book book={book} key={book.id} />
  /* const displayValue = () => {
    console.log('value')
  } */
  // return <Book {...book} key={book.id} displayValue={displayValue} />

  /*  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  } */
  // return <Book {...book} key={book.id} getBook={getBook} />
  return <Book {...book} key={book.id} number={index} />
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
