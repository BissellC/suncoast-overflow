import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
    <>
      <NavBar />

      <main>
        <h1>Questions</h1>

        <section className="question-container">
          <div>
            <div>
              <p className="question-score">0</p>
              <p className="question-score-text">Score</p>
            </div>
            <p className="question-title">How do I send an eMail?</p>
          </div>
          <p className="question-timestamp">Jan 7, 2019 10:10am</p>
        </section>
        <section className="question-container">
          <div>
            <div>
              <p className="question-score">0</p>
              <p className="question-score-text">Score</p>
            </div>
            <p className="question-title">How do I send an eMail?</p>
          </div>
          <p className="question-timestamp">Jan 7, 2019 10:10am</p>
        </section>
        <section className="question-container">
          <div>
            <div>
              <p className="question-score">0</p>
              <p className="question-score-text">Score</p>
            </div>
            <p className="question-title">How do I send an eMail?</p>
          </div>
          <p className="question-timestamp">Jan 7, 2019 10:10am</p>
        </section>
      </main>
    </>
  )
}

export default HomePage
