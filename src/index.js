import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// const Greeting = () => <h2 className="firstClass">My First Component</h2>

// jsx way of creating a component
// const Greeting = () => React.createElement('h2', {}, 'Hello world')

/* const Greeting = () =>
  React.createElement('div', {}, React.createElement('h2', {}, 'Hello world')) */

// rather calling createElement to nest any tags we could use jsx

/* const NonGreeting = () => (
  <div>
    <h1>Hey</h1>
  </div>
)
 */

const firstBook = {
  author: 'Rebecca Yarror',
  title: 'Fourth Wing (The Empyrean, 1)',
  img: 'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg',
}

const secondBook = {
  author: 'Mathew Perry',
  title: 'Friends, Lovers, and the Big Terrible Thing: A Memoir',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL600_SR600,400_.jpg',
}

const thirdBook = {
  author: 'Suzanne Collins',
  title:
    'The Ballad of Songbirds and Snakes (A Hunger Games Novel) (The Hunger Games)',
  img: 'https://images-na.ssl-images-amazon.com/images/I/61k7JqSWOUL._AC_UL600_SR600,400_.jpg',
}

const fourthBook = {
  author: 'James Clear',
  title:
    'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  img: 'https://images-na.ssl-images-amazon.com/images/I/812eE1lO0dL._AC_UL600_SR600,400_.jpg',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id
          dolorum sapiente delectus praesentium alias deserunt provident minima
          culpa, non impedit unde rerum, totam quod sed aspernatur nostrum quis
          ut.
        </p>
        <button>Submit</button>{' '}
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
      <Book
        author={fourthBook.author}
        title={fourthBook.title}
        img={fourthBook.img}
      />
    </section>
  )
}

/* const Book = (props) => {
  const { img, title, author } = props
  // console.log(props)
  return (
    <article className="book">
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />
    </article>
  )
} */

// we can directly destructure the object in function parameters

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <Image img={img} />
      <Title title={title} />
      <Author author={author} />
      {children}
      {/* children props */}
      {/* conditional rendering */}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id
        dolorum sapiente delectus praesentium alias deserunt provident minima
        culpa, non impedit unde rerum, totam quod sed aspernatur nostrum quis
        ut.
      </p>
      <button>Submit</button> */}
      {/* this will render the element in all the Books */}
    </article>
  )
}

const Image = (props) => <img src={props.img} alt={props.title} />
const Title = (props) => <h2>{props.title}</h2>
const Author = (props) => {
  // <h4 style={{ color: '617D98', fontSize: '.75rem', marginTop: '.5rem' }}>
  /* const inlineHeadlineStyles = {
    color: '617D98',
    fontSize: '.75rem',
    marginTop: '.5rem',
  }
  return <h4 style={inlineHeadlineStyles}>Rebecca Yarror</h4> */
  return <h4>{props.author}</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />)
root.render(<BookList />)
