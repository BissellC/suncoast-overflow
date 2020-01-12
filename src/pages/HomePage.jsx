import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import axios from 'axios'

const HomePage = () => {
  const [questions, setQuestions] = useState([])
  const [search, setSearch] = useState()

  const getQuestions = async () => {
    const resp = await axios.get(
      'http://suncoast-overflow-1.herokuapp.com/api/Question'
    )
    setQuestions(resp.data)
  }

  const handleSearch = async () => {
    const resp = await axios.get(
      'http://suncoast-overflow-1.herokuapp.com/api/Search/?searchTerm=' +
        search
    )
    setQuestions(resp.data)
  }

  useEffect(() => {
    getQuestions()
  }, [])

  return (
    <>
      <NavBar />
      <div className="search">
        <input onChange={e => setSearch(e.target.value)} type="search"></input>
        <button onClick={handleSearch}>Search</button>
      </div>
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
