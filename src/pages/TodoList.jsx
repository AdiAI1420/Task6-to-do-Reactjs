import React from 'react';

const TodoList = ({ todos, handleDelete }) => {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <div key={index} className="mb-2">
          <span>{todo}</span>
          <button
            type="button"
            className='btn btn-info ms-2'
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
