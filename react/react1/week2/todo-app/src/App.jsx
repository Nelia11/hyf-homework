import { useState } from "react";

import todos from "./todos.json"
import './App.css';
import Heading from './components/Heading';
import TableTitle from "./components/TableTitle";
import TableList from "./components/TableLIst";
import AddTaskRow from "./components/AddTaskRow";
import Watch from "./components/Watch";

function App() {
  const [tasks, setTasks] = useState(todos);

  const handleAddTodo = (description, deadline) => {
    const newTask = {
      id: Date.now(),
      description,
      deadline
    };

    setTasks([...tasks, newTask]);
  }

  const deleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  }
  return (
    <div className="App">
      <Heading todos={tasks}/>
      <Watch />
      <TableTitle />
      <AddTaskRow handleAddTodo={handleAddTodo}/>
      <TableList todos={tasks} deleteTask={deleteTask}/>
    </div>
  );
};

export default App;