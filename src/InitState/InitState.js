
import {GetTask} from "../Actions/GetTask";

export const InitState =  () => {
	return dispatch => {
		setTimeout(()=>dispatch(GetTask()),104);
	};
};