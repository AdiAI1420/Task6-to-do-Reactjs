import React, { useState } from "react";
import TodoList from "./TodoList";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task === "") {
      alert("Something is required");
    } 



    else if(task.length < 3 ){
alert("Minimum 5 charactersr required")
    }

    else {
      const newTodos = [...todos, task];
      setTodos(newTodos);
      setTask("");
    }

  };

  const handleDelete = (index) => {
    const newFilteredTodos = todos.filter((todo, indec) => indec !== index);
    setTodos(newFilteredTodos);
  };

  return (
    <div className="container">
      <h1 id="h1" className="display-5 h1   font-monospace fw-bold fs-1 text-center  shadow mt-5">
        To-Do Application
      </h1>

      <div className="row mt-4">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                name="task"
                value={task}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your tasks..."
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <img
            src="/assets/Todo.jpg"
            alt="Todo"
            className="mt-4 img-thumbnail border-5 rounded-3"
            style={{ height: "400px" }}
          />
        </div>
        <div className="col-md-6">
          <TodoList todos={todos} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
