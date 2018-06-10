import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers';

const history = createBrowserHistory();
const initialState = {};
const middleware = [];
if (typeof __DEV__ !== 'undefined') {
  middleware.push(createLogger());
}

middleware.push(routerMiddleware(history));
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancer(applyMiddleware(...middleware)),
);

const render = () => {
  ReactDOM.render(
    (
      <AppContainer>
        <Provider store={store}>
          <App history={history} />
        </Provider>
      </AppContainer>
    ),
    document.getElementById('root'),
  );
};

render();

if (module.hot) {
  module.hot.addStatusHandler((status) => {
    console.log('status = ', status);
  });

  module.hot.accept('./App', () => {
    // 这里是当前版本很重要的环节，不然的话react-hot-reload不起作用
    require('./App').default;
    render();
  });

  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
    render();
  });
}
