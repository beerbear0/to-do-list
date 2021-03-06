import React, { useState, Component } from 'react';
import './App.css';
import Task from './Components/card/Task';
import ToDoForm from './Components/ToDoForm/ToDoForm';
function App() {
    const [todos, setTodos] = useState([])
    const [userInput, setUserInput] = useState('');
    const [task, setTask] = useState('');

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
    function removeTask (id) {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    function handleToggle(id) {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
            )
        ])
    }
  return (
    <div>
      <section className='header'>
        <h3 className='header__title'>To Do List</h3>
      </section>
      <section className='content'>
        <div className='tasks'>
          <ToDoForm
              addTask={addTask}
              userInput={userInput}
              setUserInput={setUserInput}
          />
         {todos.map(todo => {
             return(
                 <Task
                     key={todo.id}
                     todo={todo}
                     toggleTask={handleToggle}
                     removeTask={removeTask}
                 />
             )
         })}
        </div>
      </section>
    </div>
  );
}

export default App;
