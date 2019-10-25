import React from 'react';
import ReactDOM from 'react-dom';
import EventsIndex from './components/events_index';
import './index.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import reducer from "./reducers"
import thunk from "redux-thunk"

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);
