import React, { Component, Fragment } from 'react';
import '../sass/App.scss';
import data, { randomId } from '../data/tasks';
import Task from './Task';
import TaskAdder from './TaskAdder';

class App extends Component {
  state = {
    data,
    addTask: {
      id: randomId(),
      name: '',
      completed: false,
    },
  };

  /* add the task to the list of tasks, then clear the input */
  addNewTask = e => {
    e.preventDefault();
    const { addTask } = this.state;
    const data = [...this.state.data, addTask];

    this.setState({ data }, () => this.setState({ addTask: { id: randomId(), name: '', completed: false } }));
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

  displayTasks = completed => {
    return this.state.data
      .filter(t => t.completed === completed)
      .map(task => {
        return (
          <Task
            key={task.id}
            {...task}
            handleCheck={this.handleCheck}
            changeCurrentTask={this.changeCurrentTask}
            removeCurrentTask={this.removeCurrentTask}
          />
        );
      });
  };

  render() {
    const { addTask } = this.state;

    return (
      <>
        <div className="title">
          <h1>Tasker</h1>
        </div>
        <div className="App">
          <div className="task-group">
            <h2>Task Queue</h2>
            {this.displayTasks(false)}
          </div>
          <div className="task-group">
            <h2>Completed</h2>
            {this.displayTasks(true)}
          </div>
          <TaskAdder {...addTask} changeNewTask={this.changeNewTask} addNewTask={this.addNewTask} />
        </div>
      </>
    );
  }
}

export default App;
