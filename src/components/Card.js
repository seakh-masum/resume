import React from 'react';
import '../styles/card.scss';

export const Card = (props) => {
	return (
		<div className='card'>
			{props.header && <h1 className='card__title'>{props.header}</h1>}
			{props.childComponent}
		</div>
	);
};
