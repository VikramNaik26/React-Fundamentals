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

const author = 'Rebecca Yarror'
const title = 'Fourth Wing (The Empyrean, 1)'
const img =
  'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => <img src={img} alt={title} />
const Title = () => <h2>{title}</h2>
const Author = () => {
  // <h4 style={{ color: '617D98', fontSize: '.75rem', marginTop: '.5rem' }}>
  /* const inlineHeadlineStyles = {
    color: '617D98',
    fontSize: '.75rem',
    marginTop: '.5rem',
  }
  return <h4 style={inlineHeadlineStyles}>Rebecca Yarror</h4> */
  return <h4>{author}</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />)
root.render(<BookList />)
