import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      hometown: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleHometownChange = this.handleHometownChange.bind(this)
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

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleHometownChange(e) {
    this.setState({
      hometown: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} name="username"/>
          <input type="text" value={this.state.hometown} onChange={this.handleHometownChange} name="hometown" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
