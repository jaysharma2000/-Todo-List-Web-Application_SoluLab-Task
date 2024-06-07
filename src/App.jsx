import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBox from './components/SearchBox';
import './App.css';

const App = () => {

  //default Data
  const defaultTasks = [
    { title: 'Sample Task 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vero impedit, maxime culpa modi atque nihil iste amet? Asperiores, voluptate ab sint distinctio fugit deleniti nisi eos fuga adipisci quidem. ' },
    { title: 'Sample Task 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vero impedit, maxime culpa modi atque nihil iste amet? Asperiores, voluptate ab sint distinctio fugit deleniti nisi eos fuga adipisci quidem. ' },
  
  ];

  const [tasks, setTasks] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState([]);

  //Handling data from local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
      setFilteredTasks(storedTasks);
    } else {
      setTasks(defaultTasks);
      setFilteredTasks(defaultTasks);
      localStorage.setItem('tasks', JSON.stringify(defaultTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  //function to add task
  const addTask = (task) => {
    const newTasks = [...tasks, task]; 
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  //function to edit task 
  const editTask = (editedTask) => {
    const updatedTasks = tasks.map(task => task.title === editedTask.title ? editedTask : task);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  //function to delete task
  const deleteTask = (title) => {
    const updatedTasks = tasks.filter(task => task.title !== title);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  //function to handle search results for task 
  const handleSearch = (searchStr) => {
    const searchResults = tasks.filter(task =>
      task.title.toLowerCase().includes(searchStr.toLowerCase()) ||
      task.description.toLowerCase().includes(searchStr.toLowerCase())
    );
    setFilteredTasks(searchResults);
  };

  return (
    <div className="App">
      <h1 className='heading'>Todo List</h1>
      <TodoForm 
        addTask={addTask} 
        editTask={editTask} 
        taskToEdit={taskToEdit} 
        setTaskToEdit={setTaskToEdit} 
      />
      <SearchBox 
        searchString={searchString} 
        setSearchString={setSearchString} 
        handleSearch={handleSearch} 
      />
      <TodoList 
        tasks={filteredTasks} 
        setTaskToEdit={setTaskToEdit} 
        deleteTask={deleteTask} 
      />
    </div>
  );
};

export default App;