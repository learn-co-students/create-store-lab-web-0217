import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }
  handleUsername(event) {
    this.setState({
      username: event.target.value
    })
  }
  handleHometown(event) {
    this.setState({
      hometown: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    let username = this.state.username
    let hometown = this.state.hometown
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {username, hometown}
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleUsername(event)}/>
          <input type="text" onChange={(event) => this.handleHometown(event)}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
