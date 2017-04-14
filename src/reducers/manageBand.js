
export default function manageUsers(state={users: []}, action){
	
	switch(action.type) {
		case 'ADD_USER':
			let newState = {...state}
			newState.users.push(action.user)
			return newState
		default:
			return state
	}
}
