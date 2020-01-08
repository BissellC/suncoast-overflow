import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const QuestionPage = () => {
  return (
    <>
      <NavBar />

      <main>
        <section className="question">
          <p className="question-title">How do I send an eMail?</p>
          <div className="question-body-container">
            <div className="question-vote-container">
              <p className="upvote">A</p>
              <p className="question-score">0</p>
              <p className="downvote">V</p>
            </div>
            <p className="question-body">
              This is my first time on the internet, please help!
            </p>
          </div>
        </section>

        <section className="answer">
          <h1 className="answer-text">Answers</h1>
          <section className="answer-container">
            <div className="question-body-container">
              <div className="question-vote-container">
                <p className="upvote">A</p>
                <p className="question-score">0</p>
                <p className="downvote">V</p>
              </div>
              <p className="question-body">
                This is my first time on the internet, please help!
              </p>
            </div>
          </section>
        </section>

        <section className="your-answer">
          <h1>Your Answer</h1>
          <input type="text"></input>
        </section>
      </main>
    </>
  )
}

export default QuestionPage
