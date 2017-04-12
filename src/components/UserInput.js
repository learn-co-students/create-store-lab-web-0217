import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      hometown: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleHometownChange = this.handleHometownChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleUserChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleHometownChange(e) {
    this.setState({
      hometown: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleUserChange} value={this.state.username} name='username' />
          <input type='text' onChange={this.handleHometownChange} value={this.state.hometown} name='hometown' />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
