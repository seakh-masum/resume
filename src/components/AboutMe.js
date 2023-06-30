import React from 'react';
// import '../styles/about-me.scss';

export const AboutMe = ({ introduction, description }) => {
	return (
		<div className='pl-6'>
			<p className='text-neutral-500 text-sm font-medium dark:text-neutral-300'>{introduction}</p>
			<ul className='mt-4 ml-6'>
				{description?.map((item, index) => (
					<li key={index} className='text-sm text-neutral-500 mt-2 pl-2 list-disc dark:text-neutral-300'>{item}</li>
				))}
			</ul>
		</div>
	);
};
