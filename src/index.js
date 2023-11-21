import React from 'react'
import ReactDOM from 'react-dom/client'

// const Greeting = () => <h2 className="firstClass">My First Component</h2>

// jsx way of creating a component
// const Greeting = () => React.createElement('h2', {}, 'Hello world')

const Greeting = () =>
  React.createElement('div', {}, React.createElement('h2', {}, 'Hello world'))

// rather calling createElement to nest any tags we could use jsx

/* const NonGreeting = () => (
  <div>
    <h1>Hey</h1>
  </div>
)
 */
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
