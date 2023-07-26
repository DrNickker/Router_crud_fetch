import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeadPage from '../src/components/HeadPage'
import NotFoundPage from '../src/components/NotFoundPage'
import CreatePost from '../src/components/CreatePost'
import DisplayPage from '../src/components/DisplayPage'
import EditPage from '../src/components/EditPage'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HeadPage} />
        <Route path="/posts/new" exact component={CreatePost}/>
        <Route path="/posts/:id" exact component={DisplayPage} />
        <Route path="/posts/:id/:edit" exact component={EditPage} />
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    </Router>
  )
}