export const ActionRedusers = (state = [], action) => {
	switch ( action.type ) {
		
		case 'ADD_TASK':
			state = state.concat(action.payload);
			break;
		
		case 'GET_TASK':
			return action.payload;
			break;
	}
	return state;
};