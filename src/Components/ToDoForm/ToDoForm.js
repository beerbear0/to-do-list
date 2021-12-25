import React, {useState} from "react";

function ToDoForm ({ addTask, userInput, setUserInput }) {

    function handleSubmit (e) {
        e.preventDefault();
        addTask(userInput);
        setUserInput('')
    }
    function handleKeyPress (e) {
        if(e.key === 'Enter') {
            handleSubmit()
        }
    }
    return (
        <form className='tasks__div' onSubmit={handleSubmit} >
            <input 
              className='tasks__input' 
              placeholder='Введите текст' 
              value={userInput}
              type='text'
              onChange={(e) => setUserInput(e.currentTarget.value)}
              onKeyDown={handleKeyPress}
              />
            <button type='submit' className='tasks__send'>Send</button>
          </form>
    )
}

export default ToDoForm;