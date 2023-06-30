import React from 'react';
// import '../styles/card.scss';a

export const Card = (props) => {
	return (
		// className='card'
		<div className='bg-white rounded-2xl shadow-lg p-4 relative text-black/90 block mb-4 dark:bg-neutral-900 dark:text-white'>
			{/* className='card__title' */}
			{props.header && <h1 className='text-2xl font-montserrat font-semibold pt-0 pb-4 px-2 dark:text-white'>{props.header}</h1>}
			{props.children}
		</div>
	);
};
