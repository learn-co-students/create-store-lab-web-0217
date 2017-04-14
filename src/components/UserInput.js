import React, { Component } from 'react';

class UserInput extends Component {
constructor(props){
  super(props);

    this.state= {
    username: '',
    hometown: '',
    };
  }

handleOnUsername(event){
  this.setState({
    username: event.target.value,
  });
}

handleOnHometown(event){
  this.setState({
    hometown: event.target.value,
  });
}

handleOnSubmit(event){
  event.preventDefault();
  this.props.store.dispatch({
   type: 'ADD_USER',
   user: this.state,
  });
}

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnUsername(event)} placeholder="username"/>
          <input type="text" onChange={(event) => this.handleOnHometown(event)} placeholder="hometown"/>
          <input type= "submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
