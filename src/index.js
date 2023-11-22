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

const BookList = () => {
  const author = 'Rebecca Yarror'
  const title = 'Fourth Wing (The Empyrean, 1)'
  const img =
    'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg'

  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <Image img={props.img} />
      <Title title={props.title} />
      <Author author={props.author} />
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
