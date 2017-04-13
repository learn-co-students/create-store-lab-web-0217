import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      hometown: ""
    }
    this.handleOnChangeUsername = this.handleOnChangeUsername.bind(this)
    this.handleOnChangeHometown = this.handleOnChangeHometown.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChangeUsername(ev){
    this.setState({
      username: ev.target.value
    })
  }

  handleOnChangeHometown(ev){
    this.setState({
      hometown: ev.target.value
    })
  }

  handleOnSubmit(ev){
    ev.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
    this.setState({
      username: "",
      hometown: ""

    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="username" onChange={this.handleOnChangeUsername} />
          <input type="text" name="hometown" onChange={this.handleOnChangeHometown} />
        </form>
      </div>
    );
  }
};

export default UserInput;
