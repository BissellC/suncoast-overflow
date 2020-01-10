import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import axios from 'axios'

const AskPage = () => {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const postQuestion = async () => {
    const resp = await axios.post('https://localhost:5001/api/Question/', {
      id: 0,
      title: title,
      body: body,
      description: '',
      timeStamp: new Date().toISOString(),
      voteCount: 0,
    })
  }

  return (
    <>
      <NavBar />

      <form>
        <section className="title-query">
          <h1>Title</h1>
          <p>Be specific, yet concise</p>
          <input onChange={e => setTitle(e.target.value)} type="text"></input>
        </section>
        <section className="body-query">
          <h1>Body</h1>
          <textarea
            onChange={e => setBody(e.target.value)}
            className="body-input"
          ></textarea>
        </section>
        <button onClick={postQuestion}>Submit</button>
      </form>
    </>
  )
}

export default AskPage
