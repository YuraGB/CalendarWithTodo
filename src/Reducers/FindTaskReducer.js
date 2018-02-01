

export const FindTaskReducer = (state = "", action)=> {

	if(action.type === "FIND_TASK"){
		return action.payload;
	}
	return state;
};