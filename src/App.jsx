import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import QuestionPage from './pages/QuestionPage'
import AskPage from './pages/AskPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/question/:id" component={QuestionPage}></Route>
        <Route exact path="/ask" component={AskPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
