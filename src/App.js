import React, { Component, useEffect, useRef, useState } from "react"
import "./App.css"
import Home from './components/Home'
import User from './components/User'
import Survey from './components/Survey'
import Connect from './components/Connect'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <body class="news">
        <header>
          <div class="nav">
            <ul>
              <li class="home">
                <Link to="/">Home</Link>
              </li>
              <li class="tutorials">
                <Link to="/user">User</Link>
              </li>
              <li class="about">
                <Link to="/survey">Survey</Link>
              </li>
              <li class="connect">
                <Link to="/connect">Connect</Link>
              </li>
            </ul>
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user" component={User} />
              <Route exact path="/survey" component={Survey} />
              <Route exact path="/connect" component={Connect} />
            </Switch>
          </div>
        </header>
      </body>
    </Router>
  )
}

export default App