import React from 'react';

const Searchbox = ({searchItems})=>{
	return(
			<div>
				<input 
				className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='type to search...' 
				onChange={searchItems}
				/>
			</div>
		);
}

export default Searchbox;