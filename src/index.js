import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Todo from './components/Todo';
import TodoItems from './components/Todoitems';
import Likes from './components/Likes'
import LocalStorage from './components/LocalStorage'

ReactDOM.render(
  <LocalStorage />,
  document.getElementById('root')
);
