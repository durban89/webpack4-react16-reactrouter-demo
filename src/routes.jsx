import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link as ALink,
} from 'react-router-dom';

import AppComponent from './components/AppComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import TopicsComponent from './components/TopicsComponent';
import CounterComponent from './components/CounterComponent';

const routes = (
  <div>
    <Router>
      <AppComponent>
        <ul>
          <li><ALink to="/">首页</ALink></li>
          <li><ALink to="/about">关于</ALink></li>
          <li><ALink to="/topics">论题</ALink></li>
          <li><ALink to="/counter">计数器</ALink></li>
        </ul>
        <hr />

        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/topics" component={TopicsComponent} />
        <Route path="/counter" component={CounterComponent} />
      </AppComponent>
    </Router>
  </div>
);

export default routes;
