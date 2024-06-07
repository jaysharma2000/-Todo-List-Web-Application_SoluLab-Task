import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, setTaskToEdit, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem 
          key={task.title} 
          task={task} 
          setTaskToEdit={setTaskToEdit} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
};

export default TodoList;
