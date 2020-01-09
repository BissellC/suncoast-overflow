import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import axios from 'axios'

const HomePage = () => {
  const [questions, setQuestions] = useState([])

  const getQuestions = async () => {
    const resp = await axios.get('https://localhost:5001/api/Question')
    setQuestions(resp.data)
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <>
      <NavBar />

      <main>
        <h1>Questions</h1>
        {questions.map(question => {
          return (
            <Link to={'/question/' + question.id}>
              <section className="question-container">
                <div>
                  <div>
                    <p className="question-score">{question.voteCount}</p>
                    <p className="question-score-text">Score</p>
                  </div>
                  <p className="question-title">{question.title}</p>
                </div>
                <p className="question-timestamp">{question.timestamp}</p>
              </section>
            </Link>
          )
        })}
      </main>
    </>
  )
}

export default HomePage
