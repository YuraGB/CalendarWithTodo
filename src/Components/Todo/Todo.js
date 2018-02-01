import React from 'react';
import { TodosComponent } from './TodosComponent';

export const TodoListComponent = ({todoList, dltTask, changeTask, saveTask}) => {
	
	return (
		<section className="Todo">
			<ul className="list-group list-group-flush">
			{
				todoList ? todoList.map( (todos, id) => todos
					? <TodosComponent todos={todos} key={id} dltTask={dltTask} changeTask={changeTask} saveTask={saveTask}/> : null)
					: null
			}
			</ul>
		</section>
	);
};