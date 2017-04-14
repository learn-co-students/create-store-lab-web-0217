export default function manageUsers(state = {
  users: []
}, action){

  switch (action.type) {
    case 'ADD_USER':
    debugger
        console.log(action.users)
        return Object.assign({}, state, { users: state.users.concat(action.users) });
    default:
      return state;
  }

}
