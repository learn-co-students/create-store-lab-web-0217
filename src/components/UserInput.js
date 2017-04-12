import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state={
      username: "",
      hometown: ""
    }
  }

  handleChange(field, e){
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => this.handleChange("username",e)}
            />
          Hometown:
          <input
            type="text"
            value={this.state.hometown}
            onChange={(e) => this.handleChange("hometown",e)}
            />
        </form>
      </div>
    );
  }
};

export default UserInput;
