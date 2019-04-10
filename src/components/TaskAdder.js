import React from 'react';

const TaskAdder = props => {
  const { id, name, changeNewTask, addNewTask } = props;
  return (
    <form className="task task-adder">
      <input type="text" name={id} id={id} value={name} onChange={changeNewTask} />
      <button type="submit" onClick={addNewTask}>
        Add
      </button>
    </form>
  );
};

export default TaskAdder;
