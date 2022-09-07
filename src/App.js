import './App.css';
import data from './data.json'
import React, {useState} from 'react';
//components
import Header from './Header.js'
import ToDoList from './ToDoList';
import ToDoListForm from './ToDoListFrom';

function App() {
  const [toDoList, setToDoList] = useState(data);
  const handleToggle = (id) => {
      let toDoListMapped = toDoList.map(task => {
       return task.id === Number(id) ? {...task, complete: !task.complete}:{...task};
  });
  setToDoList(toDoListMapped);
  };
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  };
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy.push({id: toDoList.length + 1, task: userInput, complete: false });
    setToDoList(copy);
  };
  return (
    <div classname="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoListForm addTask={addTask}/>
    </div>
  )
}

export default App;
