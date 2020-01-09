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
              <p className="zoom">
                <i class="fas fa-caret-up"></i>
              </p>
              <p className="question-score">0</p>
              <p className="zoom">
                <i class="fas fa-caret-down"></i>
              </p>
            </div>
            <p className="question-body">
              This is my first time on the internet, please help! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dicta consequuntur
              blanditiis doloremque voluptatum, aliquid quaerat libero sit
              debitis eligendi voluptates, cumque et explicabo nostrum veritatis
              minus vel amet maxime numquam!
            </p>
          </div>
          <p className="question-timestamp">Jan 7, 2019 10:10am</p>
        </section>

        <section className="answer">
          <h1 className="answer-text">Answers</h1>
          <section className="answer-container">
            <div className="question-body-container">
              <div className="question-vote-container">
                <p className="zoom">
                  <i class="fas fa-caret-up"></i>
                </p>
                <p className="question-score">0</p>
                <p className="zoom">
                  <i class="fas fa-caret-down"></i>
                </p>
              </div>
              <p className="question-body">
                This is my first time on the internet, please help!
              </p>
            </div>
            <p className="question-timestamp">Jan 7, 2019 10:10am</p>
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
