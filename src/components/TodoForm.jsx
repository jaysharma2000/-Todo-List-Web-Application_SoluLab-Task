import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTask, editTask, taskToEdit, setTaskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //to handle edit option
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    }
  }, [taskToEdit]);


  //function to handle add task & edit task functionality 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      if (taskToEdit) {
        editTask({ ...taskToEdit, title, description });
        setTaskToEdit(null);
      } else {
        addTask({ title, description });
      }
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='add-task-form'>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className='task-title-add' 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
        className='task-title-dis' 
      />
      <button className='task-button' type="submit">{taskToEdit ? 'Update Task' : 'Add Task'} </button>
    </form>
  );
};

export default TodoForm;
