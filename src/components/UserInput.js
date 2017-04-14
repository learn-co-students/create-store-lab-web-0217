import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
  super()
  this.state={
    username: "",
    hometown: ""
  }
  this.handleNameChange = this.handleNameChange.bind(this)
  this.handleTownChange = this.handleTownChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(e){
  e.preventDefault()
  this.props.store.dispatch({
    type:"ADD_USER",
    user: this.state

  })
}

handleNameChange(event){
    this.setState({
       username:event.target.value
    })
  }

handleTownChange(event){
    this.setState({
      hometown:event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" onChange={this.handleNameChange}/>
        Hometown: <input type="text" onChange={this.handleTownChange}/>
      </form>
    );
  }
};

export default UserInput;
