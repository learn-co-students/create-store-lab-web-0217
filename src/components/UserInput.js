import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      hometown: '',
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleHometownChange = this.handleHometownChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange({target: {value}}){
    this.setState({
      username: value,
      hometown: this.state.hometown,
    })
  }

  handleHometownChange({target: {value}}){
    this.setState({
      username: this.state.username,
      hometown: value,
    })
  }

  handleSubmit(event){
    event.preventDefault()
    debugger
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      }
    })
    this.setState({
      username: '',
      hometown: '',
    })

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>

            <label> Username </label>
            <input type="text" value={this.state.text} onChange={this.handleUsernameChange} />

            <label> Hometown </label>
            <input type="text" value={this.state.text} onChange={this.handleHometownChange} />

          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
