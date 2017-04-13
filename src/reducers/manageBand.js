export default function manageUsers(state = {
  users: []
}, action) {
  console.log(action)
  switch(action.type) {

    case 'ADD_USER':
      let user = { username: action.user.username, hometown: action.user.hometown }
      return Object.assign({}, state, { users: state.users.concat(user) });

    default:
      return state;
  }
}
