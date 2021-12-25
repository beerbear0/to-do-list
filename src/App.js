import React, { useState, Component } from 'react';
import './App.css';
import Task from './Components/card/Task';
import ToDoForm from './Components/ToDoForm/ToDoForm';
function App() {
    const [todos, setTodos] = useState([])

    function addTask (userInput) {
        if(userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                completed: false
            }
            setTodos([...todos, newItem])
        }
        console.log(todos)
    }
    function removeTask () {

    }

    function handleToggle() {

    }
    function editTask () {}
  return (
    <div>
      <section className='header'>
        <h3 className='header__title'>To Do List</h3>
      </section>
      <section className='content'>
        <div className='tasks'>
          <ToDoForm
              addTask={addTask}
          />
         {todos.map(todo => {
             return(
                 <Task
                     key={todo.id}
                     todo={todo}
                     toggleTask={handleToggle}
                     removeTask={removeTask}
                     editTask={editTask}
                 />
             )
         })}
        </div>
      </section>
    </div>
  );
}

export default App;
