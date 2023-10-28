import React from "react";

function Task({ task }) {
  const { text, category } = task;

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button
        className="delete"
        onClick={() => {
        }}
      >
        X
      </button>
    </div>
  );
}

export default Task;
