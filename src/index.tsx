import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootStore from './store';

const store = createStore(RootStore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <HashRouter basename="/">
          <App />
        </HashRouter>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
