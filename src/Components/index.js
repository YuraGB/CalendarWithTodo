import { connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";


import { ActionRedusers } from '../Reducers/ActionReduser';
import { BodyComponent } from './mainComponent';

import { InitState } from '../InitState/InitState';
import { AddTskAction } from "../Actions/AddTskAction";
import { customMiddleware } from '../customMiddleware/customMiddleware';
import { ChangeDataAction } from "../Actions/ChangeDateAction";
import { FindTaskAction } from "../Actions/FindTaskAction";
import { ChangeTaskAction } from "../Actions/ChangeTaskAction";


import {DltTaskAction} from "../Actions/DeleteTask";
import {ButtonReducer} from "../Reducers/ButtonReduser";
import {ChangeButtonAction} from "../Actions/ChangeButtonAction";
import {FindTaskReducer} from "../Reducers/FindTaskReducer";

const reducers = combineReducers({
	todoList: ActionRedusers,
	
	button: ButtonReducer,
	filter: FindTaskReducer
});

const store = createStore(reducers, applyMiddleware(thunk, customMiddleware));


store.dispatch(InitState());





const Body = connect (
	state =>  ({
		todoList: state.todoList.filter(task => task.name.includes(state.filter)),
		button: state.button
	}),
	dispatch => {
		
		return {
			dateHandler (event) {
				
				if (event.target.className === 'today') {
					dispatch (ChangeDataAction ());
				}
			},
			saveTask (event) {
				if (event.target.parentElement.previousElementSibling.value) {
					dispatch (AddTskAction ({
							name: event.target.parentElement.previousElementSibling.value,
							clss: "active"
						}
					));
					document.querySelector ('.form-control').value = '';
				}
			},
			dltTask (event) {
				dispatch (DltTaskAction ({
					name: event.target.parentElement.textContent,
					clss: "active"
				}));
			},
			changeTask ( event ) {
				
				dispatch (ChangeTaskAction ({name:event.target.parentElement.textContent,clss:'active'}));
			},
			
			toggle (event) {
			
			if( event.target.classList.contains ('input-group-text') ) {
				if (event.target.classList.contains ("save")) {
					event.target.classList.remove ('save');
					event.target.classList.add ('search');
					return dispatch(ChangeButtonAction("SEARCH"));
				} else {
					event.target.classList.remove ('search');
					event.target.classList.add ('save');
					dispatch(FindTaskAction(''));
					return dispatch(ChangeButtonAction("SAVE"));
				}
			}
		},
			searchTask(){
				dispatch(FindTaskAction(document.querySelector(".form-control").value));
			}
		};
	}
)(BodyComponent);

export { Body, store };