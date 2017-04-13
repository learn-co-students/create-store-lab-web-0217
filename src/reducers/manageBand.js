

export default function manageUsers(state = {
  users: []}, action) {

  switch(action.type){
      case 'ADD_USER':
        state = {users: [{}, {}]}
        const user = {users: [{username: action.user.username, hometown: action.user.hometown}]}
        debugger
        return Object.assign({}, state, user)

      default:
      return state
  }


  }
