import React, { Component } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

class TodoList extends Component {
  render() {
    return this.props.todoList.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        toggleComplete={this.props.toggleComplete}
        delete={this.props.delete}
      />
    ));
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired
};

export default TodoList;
