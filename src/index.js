import React from 'react';
import ReactDOM from 'react-dom';
import EventsIndex from './components/events_index';
import './index.css';
import { createStore } from "redux";
import { Provider } from "react-redux"
import reducer from "./reducers"

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);
