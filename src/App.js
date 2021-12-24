import React, { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('');
  const [taskText, setTaskText] = useState('');
  const [check, setCheck] = useState();
  const [card, setCard] = useState([]);
  
  let count = 0;
  
  function onChange (e) {
     setValue(e.target.value)  
  }

  function sendBtn (evt) {
    evt.preventDefault();
    setTaskText(value);
    setCard(card)
  }

  function editBtn (evt) {
    evt.preventDefault();
    setValue(taskText);
  }
  function toggleCheckBtn (evt) {
    evt.preventDefault();
    setCheck(!check);
  }

  function addTask () {
    return (
      <>
        <div className='task'>
          <p className={`task__text ${check ? 'check' : ''}`}>{taskText}</p>
          <button type='button' className='task__btn task__btn_edit' onClick={editBtn}/>
          <button type='button' className='task__btn task__btn_completed' onClick={toggleCheckBtn}/>
          <button type='reset' className='task__btn tast__btn_delete' />
        </div>
      </>
    )
  }
  return (
    <div>
      <section className='header'>
        <h3 className='header__title'>To Do List</h3>
      </section>
      <section className='content'>
        <div className='tasks'>
          <div className='tasks__div' >
            <input 
              className='tasks__input' 
              placeholder='Введите текст' 
              value={value} 
              onChange={onChange}
              />
            <button type='submit' className='tasks__send' onClick={sendBtn} >Send</button>
          </div>
          {card ?  <div key={count++} id={count++}>
            <div className='task'>
              <p className={`task__text ${check ? 'check' : ''}`}>{taskText}</p>
              <button type='button' className='task__btn task__btn_edit' onClick={editBtn}/>
              <button type='button' className='task__btn task__btn_completed' onClick={toggleCheckBtn}/>
              <button type='reset' className='task__btn tast__btn_delete' />
            </div>
          </div> : ''
          }
          {/* <div className='task'>
            <p className={`task__text ${check ? 'check' : ''}`}>{taskText}</p>
            <button type='button' className='task__btn task__btn_edit' onClick={editBtn}/>
            <button type='button' className='task__btn task__btn_completed' onClick={toggleCheckBtn}/>
            <button type='reset' className='task__btn tast__btn_delete' />
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default App;
