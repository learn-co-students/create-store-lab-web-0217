import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      hometown: ''
    };
  }

  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
    });
  }

  handleSubmit() {
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleChange.bind(this, "username")}/>
          <input type="text" onChange={this.handleChange.bind(this, "hometown")}/>
        </form>
      </div>
    );
  }
};

export default UserInput;
