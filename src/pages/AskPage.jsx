import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const AskPage = () => {
  return (
    <>
      <NavBar />

      <form>
        <section className="title-query">
          <h1>Title</h1>
          <p>Be specific, yet concise</p>
          <input type="text"></input>
        </section>
        <section className="body-query">
          <h1>Body</h1>
          <textarea className="body-input"></textarea>
        </section>
        <button>Submit</button>
      </form>
    </>
  )
}

export default AskPage
