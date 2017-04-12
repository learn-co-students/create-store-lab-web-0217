import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {username: '', hometown: ''}
  }

  onChangeUser(ev){
    this.setState({
      username: ev.target.value
    })
  }

  onChangeHome(ev){
    this.setState({
    hometown: ev.target.value
    })
  }

  onSubmit(ev){
    ev.preventDefault()
    this.props.store.dispatch({type: "ADD_USER", user: this.state})
  }

  render() {
    return(
      <div>
        <form onSubmit={(ev) => {this.onSubmit(ev)}}>
          <input type="text" value={this.state.username} onChange={(ev) => {this.onChangeUser(ev)}}/>
          <input type="text" value={this.state.hometown} onChange={(ev) => {this.onChangeHome(ev)}}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
