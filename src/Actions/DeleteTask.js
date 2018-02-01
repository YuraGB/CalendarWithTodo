export const DltTaskAction = ( taskId ) => {
	return{
		type: "DELETE_TASK",
		payload: taskId
	};
};