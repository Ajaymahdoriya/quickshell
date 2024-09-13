import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  return (
    <div className="taskCard">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <span className={`priority-${task.priority}`}>
        {task.priority}
      </span>
    </div>
  );
};

export default TaskCard;
