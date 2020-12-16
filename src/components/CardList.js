import React from 'react';
import Card from './Card';

const Cardlist = ({robots})=>{
	const cardsArray = robots.map((robot,i)=>{
		return (
				<Card 
				  key={i}
				  id={robot.id}
				  name={robot.name} 
				  email={robot.email}
				/>
			);
	});

	return(
		<div>
			{cardsArray}
		</div>
		);
}

export default Cardlist;