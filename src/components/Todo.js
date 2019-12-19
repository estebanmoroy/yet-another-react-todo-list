import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle = () => ({
    textDecoration: this.props.todo.isCompleted ? "line-through" : "none"
  });

  render() {
    return (
      <div className="todo">
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, this.props.todo.id)}
            checked={this.props.todo.isCompleted}
            className="todo-checkbox"
          />
          <i className="material-icons"></i>
        </label>
        <div style={this.getStyle()} className="todo-title">
          {this.props.todo.title}
        </div>
        <button onClick={this.props.delete.bind(this, this.props.todo.id)}>
          <i className="material-icons">delete</i>
        </button>
        <div className="todo-description">This is a description</div>
        <div className="todo-date">
          <span className="date-wrapper">12/12/2019</span>
        </div>
      </div>
    );
  }
}

//PropTypes
Todo.propTypes = {
  todo: PropTypes.object.isRequired
};

export default Todo;
