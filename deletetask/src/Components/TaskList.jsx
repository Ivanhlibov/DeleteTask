import React from 'react';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: "Task 1" },
        { id: 2, text: "Task 2" },
        { id: 3, text: "Task 3" }
      ]
    };
  }

  handleDeleteTask = (taskId) => {
    const updatedTasks = this.state.tasks.filter(task => task.id !== taskId);
    this.setState({ tasks: updatedTasks });
  }

  render() {
    return (
      <div style={{ margin: '20px' }}>
        {this.state.tasks.map(task => (
          <div key={task.id} >
            {task.text}
            <button onClick={() => this.handleDeleteTask(task.id)}>Видалити</button>
          </div>
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <h1>Список завдань</h1>
      <TaskList />
    </div>
  );
}

export default App;
