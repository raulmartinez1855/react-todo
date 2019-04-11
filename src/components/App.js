import React, { Component } from "react";
import "../sass/App.scss";
import data, { randomId } from "../data/tasks";
import Task from "./Task";
import TaskAdder from "./TaskAdder";

class App extends Component {
  state = {
    data,
    addTask: {
      id: randomId(),
      name: "",
      completed: false
    }
  };

  /* add the task to the list of tasks, then clear the input */
  addNewTask = e => {
    e.preventDefault();
    const { addTask } = this.state;
    const empty = addTask.name.trim().length;
    if (!empty) {
      return null;
    }
    const data = [...this.state.data, addTask];
    this.setState({ data }, () =>
      this.setState({ addTask: { id: randomId(), name: "", completed: false } })
    );
  };

  /* input handler for TaskAdder */
  changeNewTask = e => {
    const { addTask } = this.state;
    addTask.name = e.target.value;

    this.setState({ addTask });
  };

  /* input handler for Task */
  changeCurrentTask = e => {
    const { data } = this.state;
    const newTask = data.filter(v => v.id === e.target.id)[0];
    const loc = data.indexOf(newTask);

    data[loc].name = e.target.value;
    this.setState({ data });
  };

  /* Delete Current Task */
  removeCurrentTask = id => {
    const { data } = this.state;
    const newData = data.filter(v => v.id !== id);

    this.setState({ data: newData });
  };

  /* Move Task to Completed or Vice Versa  */
  handleCheck = id => {
    this.setState(prevState => {
      const { data } = prevState;
      const task = data.filter(v => v.id === id)[0];
      const loc = data.indexOf(task);
      data[loc].completed = !data[loc].completed;

      return { data };
    });
  };

  render() {
    const { data, addTask } = this.state;

    return (
      <div className="App">
        <div className="title">
          <h1>Tasker</h1>
        </div>
        <div className="flex-display">
          <div className="task-group">
            {data.map(task => {
              return (
                <Task
                  key={task.id}
                  {...task}
                  handleCheck={this.handleCheck}
                  changeCurrentTask={this.changeCurrentTask}
                  removeCurrentTask={this.removeCurrentTask}
                />
              );
            })}
          </div>
          <TaskAdder
            {...addTask}
            changeNewTask={this.changeNewTask}
            addNewTask={this.addNewTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
