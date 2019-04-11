import React from "react";

const Task = props => {
  const {
    id,
    completed,
    name,
    changeCurrentTask,
    handleCheck,
    removeCurrentTask
  } = props;

  return (
    <div className="task">
      <input
        disabled={completed}
        type="text"
        name={id}
        id={id}
        value={name}
        onChange={e => changeCurrentTask(e)}
      />
      <button
        className={completed ? "completed" : ""}
        type="submit"
        onClick={() => handleCheck(id)}
      >
        {completed && "✓"}
      </button>
      <button className="remove" onClick={() => removeCurrentTask(id)}>
        X
      </button>
    </div>
  );
};

export default Task;
