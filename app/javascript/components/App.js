import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Article from './Article/Article'
import Articles from './Articles/Articles'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Articles} />
      <Route exact path="/articles/:id" component={Article} />
    </Switch>
  )
}

export default App