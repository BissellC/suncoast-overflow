import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const AskPage = () => {
  return (
    <>
      <NavBar />

      <main>
        <section className="title-query">
          <h1>Title</h1>
          <p>Be specific, yet concise</p>
          <input type="text"></input>
        </section>
        <section className="body-query">
          <h1>Body</h1>
          <input type="text" className="body-input"></input>
        </section>
        <button>Submit</button>
      </main>
    </>
  )
}

export default AskPage
