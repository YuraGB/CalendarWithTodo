import React from 'react';
import  ReactDOM  from 'react-dom';
import { Body, store } from './Components/index';
import { Provider } from 'react-redux';



ReactDOM.render(<Provider store={store}>
					<Body/>
				</Provider>,
	document.querySelector('.root'));

