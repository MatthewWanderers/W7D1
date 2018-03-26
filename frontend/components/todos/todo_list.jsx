import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

module.exports = ({ todos, receiveTodo }) => (
  <div>
    <ul>
      {todos.map((todo) => {
        return <TodoListItem todo={todo} key={todo.title}/>;
      })}
    </ul>
    <TodoForm someCallback={receiveTodo}/>
  </div>
);
