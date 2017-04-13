import React, { Component } from 'react';

class UserInput extends Component {
	constructor(){
		super()
		this.state = {
			username: '',
			hometown: '',
		}

	this.handleSubmit = this.handleSubmit.bind(this)
	this.handleChangeHometown = this.handleChangeHometown.bind(this)
	this.handleChangeUsername = this.handleChangeUsername.bind(this)

	}
	handleChangeHometown(event){
		this.setState({
			hometown: event.target.value 
		})
	}

	handleChangeUsername(event){
		this.setState({
			username: event.target.value
		})

	}

	handleSubmit(event){
		event.preventDefault()
		this.props.store.dispatch({
			type: 'ADD_USER',
			user: this.state
		})

	}
  render() {
    return(
      <div>
      	<form onSubmit={this.handleSubmit}>
      		<label>Add Username</label>
      		<input type="text" onChange={this.handleChangeUsername}/>
      		<label>Add Hometown</label>
      		<input type="text" onChange={this.handleChangeHometown}/>
 			<input type="submit" />
 		</form>
      </div>
    );
  }
};

export default UserInput;
