import React from "react";

function Task ({ todo, toggleTask, removeTask, editTask }) {
    return (
        <div className='task' key={todo.id}>
            <p className={`task__text ${todo.complete ? 'check' : ''}`}>{todo.task}</p>
            <button type='button' className='task__btn task__btn_edit' onClick={() => editTask(todo.id)}/>
            <button type='button' className='task__btn task__btn_completed' onClick={() => toggleTask(todo.id)} />
            <button type='reset' className='task__btn tast__btn_delete' onClick={() => removeTask(todo.id)}/>
          </div>
    )

}

export default Task;