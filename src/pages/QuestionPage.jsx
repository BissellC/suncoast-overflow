import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import axios from 'axios'

const QuestionPage = props => {
  const [question, setQuestion] = useState([])
  const [questionCount, setQuestionCount] = useState()
  const [answerCount, setAnswerCount] = useState()
  const [answers, setAnswers] = useState([])
  const [answer, setAnswer] = useState()

  const getQuestion = async () => {
    const resp = await axios.get(
      'http://suncoast-overflow-1.herokuapp.com/api/Question/' +
        props.match.params.id
    )
    setQuestion(resp.data)
    setQuestionCount(resp.data.voteCount)
    setAnswers(resp.data.answers)
  }

  const postAnswer = async () => {
    const resp = await axios.post(
      'http://suncoast-overflow-1.herokuapp.com/api/Answer/',
      {
        id: 0,
        body: answer,
        voteCount: 0,
        timeStamp: new Date().toISOString(),
        questionId: parseInt(props.match.params.id),
      }
    )
    getQuestion()
  }

  const upvoteQ = async () => {
    const resp = await axios.put(
      'http://suncoast-overflow-1.herokuapp.com/api/Question/' +
        props.match.params.id,
      {
        id: question.id,
        title: question.title,
        body: question.body,
        description: question.description,
        timeStamp: question.timeStamp,
        voteCount: questionCount + 1,
      }
    )
    getQuestion()
  }

  const downvoteQ = async () => {
    const resp = await axios.put(
      'http://suncoast-overflow-1.herokuapp.com/api/Question/' +
        props.match.params.id,
      {
        id: question.id,
        title: question.title,
        body: question.body,
        description: question.description,
        timeStamp: question.timeStamp,
        voteCount: questionCount - 1,
      }
    )
    getQuestion()
  }

  const upvoteA = async answer => {
    const resp = await axios.put(
      'http://suncoast-overflow-1.herokuapp.com/api/Answer/' + answer.id,
      {
        id: answer.id,
        body: answer.body,
        timeStamp: answer.timeStamp,
        voteCount: answer.voteCount + 1,
        questionID: question.id,
      }
    )
    getQuestion()
  }

  const downvoteA = async answer => {
    const resp = await axios.put(
      'http://suncoast-overflow-1.herokuapp.com/api/Answer/' + answer.id,
      {
        id: answer.id,
        body: answer.body,
        timeStamp: answer.timeStamp,
        voteCount: answer.voteCount - 1,
        questionID: question.id,
      }
    )
    getQuestion()
  }

  useEffect(() => {
    getQuestion()
  }, [])

  return (
    <>
      <NavBar />

      <main>
        <section className="question">
          <p className="question-title">{question.title}</p>
          <div className="question-body-container">
            <div className="question-vote-container">
              <p className="zoom">
                <i onClick={upvoteQ} class="fas fa-caret-up"></i>
              </p>
              <p className="question-score">{question.voteCount}</p>
              <p className="zoom">
                <i onClick={downvoteQ} class="fas fa-caret-down"></i>
              </p>
            </div>
            <p className="question-body">{question.body}</p>
          </div>
          <p className="question-timestamp">{question.timeStamp}</p>
        </section>

        <section className="answer">
          <h1 className="answer-text">Answers</h1>
          {answers.map(answer => {
            return (
              <section className="answer-container">
                <div className="question-body-container">
                  <div className="question-vote-container">
                    <p className="zoom">
                      <i
                        onClick={() => upvoteA(answer)}
                        class="fas fa-caret-up"
                      ></i>
                    </p>
                    <p className="question-score">{answer.voteCount}</p>
                    <p className="zoom">
                      <i
                        onClick={() => downvoteA(answer)}
                        class="fas fa-caret-down"
                      ></i>
                    </p>
                  </div>
                  <p className="question-body">{answer.body}</p>
                </div>
                <p className="question-timestamp">{answer.timeStamp}</p>
              </section>
            )
          })}
        </section>

        <section className="your-answer">
          <h1>Your Answer</h1>
          <input type="text" onChange={e => setAnswer(e.target.value)}></input>
          <button onClick={postAnswer}>Submit Answer</button>
        </section>
      </main>
    </>
  )
}

export default QuestionPage
