import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super();
    this.state={
      username:'',
      hometown: ''
    }
  }

  handleUserChange(e){

      this.setState({
        username: e.target.value
      });
    }

    handleHomeChange(e){
      this.setState({
        hometown: e.target.value
      })
    }

    handleSubmit(e){
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Username: </label>
          <input type="text" onChange={this.handleUserChange.bind(this)} value={this.state.username} />
          <label>Hometown: </label>
          <input type="text" onChange={this.handleHomeChange.bind(this)} value={this.state.hometown} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
