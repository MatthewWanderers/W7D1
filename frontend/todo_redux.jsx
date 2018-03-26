import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo } from './actions/todo_actions.js';
import Root from './components/root';
import { allTodos } from './reducers/selectors.js';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Root store={ configureStore() }/>,
      document.getElementById('root')
    );
});


const store = configureStore();

//remove me later
window.store = store;
window.getState = store.getState;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos(window.getState());
