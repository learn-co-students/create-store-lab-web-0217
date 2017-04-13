import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hometown: '',
    }
  }

  handleOnSubmit(e) {
    e.preventDefault()

    this.props.store.dispatch({
      type: "ADD_USER",
      user: Object.assign({}, this.state)
    })

    this.setState({
      username: ''
    })
  }

  handleNameChange(e) {
    this.setState({
      username: e.target.value,
    })
  }

  handleHometownChange(e) {
    this.setState({
      hometown: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          Username: <input type="text" onChange={(e) => this.handleNameChange(e)}/>
        Hometown: <input type="text" onChange={(e) => this.handleHometownChange(e)}/>
        </form>
      </div>
    );
  }
};

export default UserInput;
