import React from "react";
import "./indTask.css";

const IndTask = (props) => {
    const {t} = props;
  return <div className="indTask">{t.task}</div>;
};

export default IndTask;
