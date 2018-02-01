

export const ButtonReducer = (state = "SAVE", action)=> {
	
//	console.log("in action", action)
	if(action.type === "CHANGE_BUTTON"){
		return action.payload;
	}
	return state;
};