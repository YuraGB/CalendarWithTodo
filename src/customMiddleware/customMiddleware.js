
import { saveToLocalStorage, getFromLocalStorage, deleteTask } from '../share/share';

import {GetTask} from "../Actions/GetTask";
import { changeTask } from "../share/share";

let chank = null;

export const customMiddleware = store => next => action => {
	
	if( action.type === "ADD_TASK") {
		if(chank !== null) {
			
			deleteTask(chank);
		}
		const list = saveToLocalStorage (action.payload);
		return	next(GetTask(list));
	}
	if( action.type === "GET_TASK") {
		return		setTimeout(()=> {
				action.payload = getFromLocalStorage();
				next(action);
			},104);
	}
	if( action.type === "CHANGE_DATE" ) {
		const list = getFromLocalStorage();
		return	next(GetTask(list));
	}
	if( action.type === "DELETE_TASK" ) {
		const list = deleteTask(action.payload);
		return	next(GetTask(list));
	}
	if( action.type === "CHANGE_TASK" ) {
		chank = action.payload;
		const list = changeTask(action.payload);
		return	next(GetTask(list));
	}
	next(action);
};

