import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import YourRecipe from './YourRecipe';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/YourRecipe" component={YourRecipe} />

      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
