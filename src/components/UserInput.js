import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleOnChangeUser(event){
    this.setState({
       username: event.target.value,
     });
  }

  handleOnChangeHometown(event){
    this.setState({
       hometown: event.target.value,
     });
  }

  handleSubmit(event) {
    event.preventDefault()
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
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text" onChange={(event) => this.handleOnChangeUser(event)} ></input>
        <input type="text" onChange={(event) => this.handleOnChangeHometown(event)} ></input>
        <input type="submit"/>
      </form>
      // <form onSubmit={(event) => this.handleSubmit(event)}>
      //     <input type="text" onChange={(event) => this.handleOnChange(event)} />
      //     <input type="submit" />
      // </form>
    );
  }
};

export default UserInput;
