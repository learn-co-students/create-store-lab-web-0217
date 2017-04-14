import React, { Component } from 'react'

const INITIAL_STATE = {
		username: '',
		hometown: ''
	}

class UserInput extends Component {

	constructor(props) {
		super(props)

		this.state = INITIAL_STATE

		this.handleUser = this.handleUser.bind(this)
		this.handleHometown = this.handleHometown.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleUser(event){
		this.setState({
			username: event.target.value
		})
	}

	handleHometown(event){
		this.setState({
			hometown: event.target.value
		})
	}

	handleSubmit(event){
		event.preventDefault()
		this.props.store.dispatch({
			type: 'ADD_USER',
			user:  Object.assign({}, this.state)
		})

		// this.setState(INITIAL_STATE)
	}



  render() {
    return(
      <div>
      	<form onSubmit={this.handleSubmit} >
	        <input id="username" type="text" onChange={this.handleUser} />
	        <input id="hometown" type="text" onChange={this.handleHometown} />
	        <input type="submit" />
        </form>
      </div>
    )
  }
}

export default UserInput
