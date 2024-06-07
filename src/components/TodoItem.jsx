import React from 'react';

const TodoItem = ({ task, setTaskToEdit, deleteTask }) => {
  return (
    <div className='add-task'>
        <div>
            <h3 className='task-name1'>{task.title}</h3>
            <p className='task-discription1'>{task.description}</p>
        </div>

        <div>
            <button className='edit-btn' onClick={() => setTaskToEdit(task)}>Edit</button>
            <button className='delete-btn' onClick={() => deleteTask(task.title)}>Delete</button>
        </div>
    </div>
  );
};

export default TodoItem;
