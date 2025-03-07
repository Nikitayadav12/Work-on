import { useState } from "react";
import "./App.css";

import AddData from './component/addData.jsx';
import DisplayTasks from './component/displayTasks.jsx';

function App() {

  const [tasks, setTasks] = useState([]);

  console.log("tasks final data: ", tasks);
  return (
    <>
      <AddData setTasks={setTasks}/>
      <DisplayTasks tasks={tasks}/>
    </>
  );
}

export default App;