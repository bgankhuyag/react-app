import React from 'react';

function Todo({todo, toggleComplete, removeTodo}) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  const liStyles = {
    color: "white",
    textDecoration: todo.completed ? "line-through" : null,
    listStyleType: "none",
    width: 300,
    borderBottom: '1px solid grey',
    margin: 10,
    textAlign: 'left',
  };

  return (
    <div style={{display: 'flex'}}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li style={liStyles}> {todo.task} </li>
      <button style={{height: 30, marginTop: 10}} onClick={handleRemoveClick} >X</button>
    </div>
  );
}

export default Todo;
