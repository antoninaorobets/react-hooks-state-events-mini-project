import React from "react";

function Task({category, text,onDeleteTask}) {
 
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDeleteTask} name={text}>X</button>
    </div>
  );
}

export default Task;
