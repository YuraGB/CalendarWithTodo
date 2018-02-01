import React from 'react';

export const Calendar = ({dateHandler}) => {
	return(
		//<input type="date"/>
		<div className="calendar-wrapper">
			<button id="btnPrev" type="button">Prev</button>
			<button id="btnNext" type="button">Next</button>
			<div id="divCal" onClick={dateHandler}></div>
		</div>
	);
};