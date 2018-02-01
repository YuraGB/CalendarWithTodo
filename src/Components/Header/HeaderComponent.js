import React from "react";
import { Calendar } from "./CalendarComponent";



export const HeaderComponent = ({date, dateHandler, saveTask, button, toggle, searchTask}) => {
	function inputTask (event) {
		
		return event.target.textContent === "SAVE" ? saveTask(event) : searchTask();
	}

	
	return (
	<section className="Header">
		<Calendar date={date} dateHandler={dateHandler}/>
		<div className="input">
			<div className="input-group mb-3">
				<span className="input-group-text save" onClick={toggle}></span>
				<input type="text" className="form-control" placeholder=" Enter your Task" aria-label="Task" aria-describedby="basic-addon2"/>
					<div className="input-group-append">
						<button className="btn btn-outline-secondary" type="button" onClick={inputTask}>{
							button
						}</button>
					</div>
			</div>
		</div>
		
		
	</section>
	);
};