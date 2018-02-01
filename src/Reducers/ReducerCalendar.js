export const ReducerCalendar = (state = new Date(), action) => {
	if( action.type === 'CHANGE_DATE') {
		return action.payload;
	}
	return state;
};