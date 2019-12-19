import React, { Component } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import "./App.scss";

class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        title: "This is a to-do",
        isCompleted: false
      },
      {
        id: 2,
        title: "This is a completed to-do",
        isCompleted: true
      }
    ]
  };

  addTodo = title => {
    const todo = {
      id: 3,
      title,
      completed: false
    };
    this.setState({ todoList: [...this.state.todoList, todo] });
  };

  toggleComplete = id => {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  };

  delete = id => {
    this.setState({
      todoList: [...this.state.todoList.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="todo-list">
          <AddTodo addTodo={this.addTodo} />
          <TodoList
            todoList={this.state.todoList}
            toggleComplete={this.toggleComplete}
            delete={this.delete}
            className="project"
          />
        </div>
      </div>
    );
  }
}

export default App;
