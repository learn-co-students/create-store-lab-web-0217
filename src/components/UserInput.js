import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleOnUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleOnHometownChange(event) {
    this.setState({
      hometown: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.handleOnUsernameChange(event)} placeholder="Username"/>
          <input type="text" value={this.state.text} onChange={(event) => this.handleOnHometownChange(event)} placeholder="Hometown"/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
