import React from 'react';
import ReactDOM from 'react-dom';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new'
import './index.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import reducer from "./reducers"
import thunk from "redux-thunk"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events/new" component={EventsNew} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
