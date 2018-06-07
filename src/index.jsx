import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router';
import ReactDOM from 'react-dom';
import rootReducer from './reducers';
import routes from './routes';

const history = createBrowserHistory();
const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancer(applyMiddleware(routerMiddleware(history))),
);

ReactDOM.render(
  (
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {routes}
        </ConnectedRouter>
      </Provider>
    </AppContainer>
  ),
  document.getElementById('root'),
);
