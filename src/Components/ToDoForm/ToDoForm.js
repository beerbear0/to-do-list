import React from "react";

function ToDoForm ({value, setValue, sendBtn}) {
    
    function onChange (e) {
        setValue(e.target.value)  
     }
     
    return (
        <div className='tasks__div' >
            <input 
              className='tasks__input' 
              placeholder='Введите текст' 
              value={value} 
              onChange={onChange}
              />
            <button type='submit' className='tasks__send' onClick={sendBtn} >Send</button>
          </div>
    )
}

export default ToDoForm;