import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange(change) {
    this.setState(
      change
    )
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Username</label>
          <input type="text" onChange={e => this.handleChange({username: e.target.value})} />
          <label>Hometown</label>
          <input type="text" onChange={e => this.handleChange({hometown: e.target.value})} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
