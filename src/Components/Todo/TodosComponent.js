import React from 'react';

export const TodosComponent = ({todos, dltTask, changeTask, saveTask}) => {

	
	if(todos.clss === 'active') {
		return (
			<li className="list-group-item" >{todos.name}
				<i className="changeIcon" onClick={changeTask}></i>
				<i className="deleteIcon" onClick={dltTask}></i>
			</li>
		);
	}
	else {
		return (
			<li className="list-group-item" >
				<div className="input-group mb-3">
					<input type="text" className="form-control" aria-describedby="basic-addon1" defaultValue={todos.name}/>
					<div className="input-group-prepend">
						<button className="btn btn-outline-secondary" type="button" onClick={saveTask}>Save</button>
					</div>
				</div>
			
			</li>
		);}
};