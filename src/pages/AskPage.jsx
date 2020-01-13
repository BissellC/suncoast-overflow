import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar'
import axios from 'axios'

const AskPage = () => {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [id, setId] = useState()
  const [wasQuestionCreated, setWasQuestionCreated] = useState(false)

  const postQuestion = async e => {
    e.preventDefault()
    const resp = await axios.post(
      'https://suncoast-overflow-1.herokuapp.com/api/Question/',
      {
        id: 0,
        title: title,
        body: body,
        description: '',
        timeStamp: new Date().toISOString(),
        voteCount: 0,
      }
    )
    if (resp.status === 200) {
      setId(resp.data.id)
    }
  }

  useEffect(() => {
    if (id) {
      setWasQuestionCreated(true)
    }
  }, [id])

  return wasQuestionCreated ? (
    <Redirect to={`/question/${id}`} />
  ) : (
    <>
      <NavBar />

      <form onSubmit={postQuestion}>
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
        <button>Submit</button>
      </form>
    </>
  )
}

export default AskPage
