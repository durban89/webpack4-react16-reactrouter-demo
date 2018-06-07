import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link as ALink,
} from 'react-router-dom';

import AppComponent from './components/AppComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import TopicsComponent from './components/TopicsComponent';

ReactDOM.render(
  (
    <Router>
      <AppComponent>
        <ul>
          <li><ALink to="/">首页</ALink></li>
          <li><ALink to="/about">关于</ALink></li>
          <li><ALink to="/topics">论题</ALink></li>
        </ul>
        <hr />

        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/topics" component={TopicsComponent} />
      </AppComponent>
    </Router>
  ),
  document.getElementById('root'),
);
