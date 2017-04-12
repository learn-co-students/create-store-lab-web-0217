import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }

  changeUser(e){
    this.setState({
      username: e.target.value,
      hometown: this.state.hometown
    })
  }

  changeHomeTown(e){
    this.setState({
      username: this.state.username,
      hometown: e.target.value
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={(e) =>{
            e.preventDefault()
            this.props.store.dispatch({type: "ADD_USER", user: this.state})
          }}>
          <input type="text" onChange={this.changeUser.bind(this)}/>
          <input type="text" onChange={this.changeHomeTown.bind(this)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
