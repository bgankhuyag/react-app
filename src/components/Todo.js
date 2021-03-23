import React from 'react';

function Todo({todo, toggleComplete, removeTodo}) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  const liStyles = {
    color: "black",
    textDecoration: todo.completed ? "line-through" : null,
    listStyleType: "none",
    width: 300,
    borderBottom: '1px solid grey',
    margin: 10,
    textAlign: 'left',
  };

  return (
    <div style={{display: 'flex'}}>
      <input type="checkbox" onClick={handleCheckboxClick} defaultChecked={todo.completed ? "checked" : null} />
      <li style={liStyles}> {todo.task} </li>
      <button onClick={handleRemoveClick} className="remove">X</button>
    </div>
  );
}

export default Todo;
