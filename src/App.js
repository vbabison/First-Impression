import React, { Component, useEffect, useRef, useState } from "react"
import "./App.css"
import Home from './components/Home'
import User from './components/User'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
          </Switch>
        </div>
      </header>
    </Router>
  )
}

export default App