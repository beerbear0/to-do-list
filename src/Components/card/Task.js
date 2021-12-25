import React from "react";

function Task ({ taskText, complete, editBtn, toggleCheckBtn, deleteBtn}) {
    return (
        <div className='task'>
            <p className={`task__text ${complete === true ? 'check' : ''}`}>{taskText}</p>
            <button type='button' className='task__btn task__btn_edit' onClick={editBtn}/>
            <button type='button' className='task__btn task__btn_completed' defaultChecked={complete} onClick={toggleCheckBtn}/>
            <button type='reset' className='task__btn tast__btn_delete' onReset={deleteBtn}/>
          </div> 
    )
}

export default Task;