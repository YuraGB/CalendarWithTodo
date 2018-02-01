
function _getKeyForLs () {
	if(document.querySelector('td.today') !== null){
		const year = document.querySelector ('td[colspan="7"]').textContent.match (/\d+/)[0];
		const date = document.querySelector ('td.today').textContent;
		const month = document.querySelector ('td[colspan="7"]').textContent.match (/\w+/)[0];
		
		return year+date+month;
	}
	
}




export const saveToLocalStorage = ( task ) => {
	const date = _getKeyForLs();
	const data = localStorage.getItem(date);
	
	
	if( data ){
		const t = data.split (';').concat(JSON.stringify(task));
		
	
			localStorage.setItem(date, [...new Set(t)].join(';'));
			return getFromLocalStorage();
	}
	localStorage.setItem(date, JSON.stringify(task));
	return getFromLocalStorage();
};


export const getFromLocalStorage = () => {
		const date = _getKeyForLs();
		const data = localStorage.getItem(date);
		
	if( data ) {
		
		return data.split (';').map( (elem) => JSON.parse(elem) );
	}
	return [];
};


export const deleteTask = ( task ) => {
		const date = _getKeyForLs();
		const data = localStorage.getItem (date);
		
		if (data.length !== 0 ) {
			let d = data.split (';').filter( (elem) => {
				
				if( elem !== JSON.stringify(task))
					return elem;
			});
			localStorage.setItem(date, d.join(';'));
			if (d.length!== 0){
				
				return d.map( (elem) => JSON.parse(elem) );
			}
			localStorage.removeItem(date);
			return [];
		}
};



export const changeTask = ( task ) => {
	
	const date = _getKeyForLs();
	const data = localStorage.getItem (date);
	if ( data ) {
		const d = data.split (';').map( (elem) => {
			if( elem === JSON.stringify(task)) {
				return JSON.stringify ({name: JSON.parse(elem).name, clss: 'change'});
			}
			return elem;
		});
		
		return d.map( (elem) => JSON.parse(elem) );
	}
	
};


