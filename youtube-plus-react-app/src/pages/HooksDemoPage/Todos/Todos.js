import React, { useRef, useReducer, useEffect } from 'react';
import todoReducer from '../../../reducers/todoReducer';

const Todos = () => {
  // creating a ref for the input field to capture the entered input in a fn comp
  const todoInput = useRef('');
  console.log(todoInput);

  const [todoList, todoListDispatch] = useReducer(todoReducer);
  console.log(todoList);

  const handleAddTodo = () => {
    console.log(todoInput.current.value); // entered input

    todoListDispatch({
      type: 'ADD_TODO',
      payload: {
        id: new Date(),
        title: todoInput.current.value,
        isCompleted: false
      }
    });
  };

  return (
    <>
      <h3>Todos</h3>
      <div className="row">
        <div className="col-auto">
          <input type="text" className="form-control" ref={todoInput} />
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary" onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoList?.map((todo) => {
                return (
                  <li className="list-group-item" key={todo.id}>
                    {todo.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
