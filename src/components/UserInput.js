import React, { Component } from 'react';

class UserInput extends Component {

  constructor(props){
    super(props)

    this.state = {
      username: '',
      hometown: '',
    }
  }

handleOnUsernameChange(e){

  this.setState({
    username: e.target.value,
  });
}

handleOnHometownChange(e){
  this.setState({
    hometown: e.target.value,
  });
}

handleOnSubmit(e){
  
  e.preventDefault();
  this.props.store.dispatch({
    type: 'ADD_USER',
    users: this.state,
  })
}


  render(){
    return(
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
            <p><input type='text' placeholder='username' onChange={(e) => this.handleOnUsernameChange(e)} /></p>
            <p><input type='text' placeholder='hometown' onChange={(e) => this.handleOnHometownChange(e)} /></p>
            <input type='submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
