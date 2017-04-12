export default function manageUsers(state, action){
  switch (action.type) {
    case "ADD_USER":
      let addedUser = [...state.users, action.user]
      return {users: addedUser}
    default:
      return state
  }
}
