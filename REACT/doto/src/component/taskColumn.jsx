import React from "react";
import IndTask from "./indTask";

const TaskColumn = (props) => {
  const { title, status, tasks } = props;
  return (
    <div className="taskColumn">
      <h1>{title}</h1>

      {tasks.map((t, index) => t.status === status && <IndTask t={t} />)}
    </div>
  );
};

export default TaskColumn;
