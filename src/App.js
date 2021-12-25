import React, { useState } from 'react';
import './App.css';
import Task from './Components/card/Task';
import ToDoForm from './Components/ToDoForm/ToDoForm';

function App() {

  const [value, setValue] = useState('');
  const [check, setCheck] = useState(false);
  const [cards, setCards] = useState([]);

  const activeTask = cards.filter(task => task.complete === false);
  const completedTask = cards.filter(task => task.complete === true);

  function sendBtn (evt) {
    // evt.preventDefault();
    cards.push({
      id: Math.random().toString(36).substr(2, 9),
      description: value,
      complete: false,
    },)
    console.log(cards.length)

  }


  // const finalTasks =
  return (
    <div>
      <section className='header'>
        <h3 className='header__title'>To Do List</h3>
      </section>
      <section className='content'>
        <div className='tasks'>
          <ToDoForm 
            value={value}
            setValue={setValue}
            sendBtn={sendBtn}
          />
         {cards.map(item => {
           return(
               <Task key={item.id}
                     check={check}
                     taskText={item.description}
                     complete={item.complete}
               />
           )
         })}
        </div>
      </section>
    </div>
  );
}

export default App;
