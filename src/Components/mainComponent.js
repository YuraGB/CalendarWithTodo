import React from 'react';
import { HeaderComponent } from './Header/HeaderComponent.js';
import { TodoListComponent } from "./Todo/Todo";

export const BodyComponent = ({todoList, dateHandler, saveTask, dltTask, button, toggle, searchTask, changeTask}) => {
	
	return (
		<div>
			<HeaderComponent dateHandler={dateHandler} saveTask={saveTask} button={button} toggle={toggle} searchTask={searchTask}/>
			<TodoListComponent todoList={todoList} dltTask={dltTask} changeTask={changeTask} saveTask={saveTask}/>
		</div>
	);
};