import React, { useState } from "react";
import { Button, Input, MenuItem, Select } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./addData.css";
const AddData = (props) => {
  const { setTasks } = props;
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleChange = (e) => {
    // console.log("Inside : ", e.target.name);
    const name = e.target.name;
    const value = e.target.value;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      task: "",
      status: "todo",
    });
  };

  console.log("Task data", taskData);

  return (
    <div className="task_add_container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          onChange={(e) => handleChange(e)}
          className="InputBox"
          placeholder="Enter Task"
          name="task"
        ></Input>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          autoWidth
          name="status"
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={"todo"}>To Do</MenuItem>
          <MenuItem value={"doing"}>Doing</MenuItem>
          <MenuItem value={"done"}>Done</MenuItem>
        </Select>

        <Button
          className="submitButton"
          variant="contained"
          startIcon={<AddIcon />}
          type="submit"
        >
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default AddData;