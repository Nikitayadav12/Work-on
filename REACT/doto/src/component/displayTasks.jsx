import React from "react";
import "./displayTask.css";
import TaskColumn from "./taskColumn";

const DisplayTasks = (props) => {
  const { tasks } = props;
  return (
    <div className="displayTasks">
      <TaskColumn title="To do" status="todo" tasks={tasks} />
      <TaskColumn title="Doing" status="doing" tasks={tasks}/>
      <TaskColumn title="Done" status="done" tasks={tasks}/>
    </div>
  );
};

export default DisplayTasks;
