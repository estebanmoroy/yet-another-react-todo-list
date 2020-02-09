import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <form className="add-todo" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add a new to-do"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="add-todo-button">
          <i className="material-icons">add</i>
        </button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
