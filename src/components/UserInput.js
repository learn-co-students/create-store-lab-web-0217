import React, { Component } from 'react';

class UserInput extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			hometown: ''
		}
		this.handleInput = this.handleInput.bind(this)
		this.handleHometown = this.handleHometown.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInput(event) {
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
		this.props.store.dispatch({type: "ADD_USER", user: {username: this.state.username, hometown: this.state.hometown}})
	}
  render() {
    return(
      <div>
      	<form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} onChange={this.handleInput} />
        <input type="text" value={this.state.hometown} onChange={this.handleHometown} />
        </form>
      </div>
    );
  }
};

export default UserInput;
