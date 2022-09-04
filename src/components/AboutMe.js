import React from 'react';
import '../styles/about-me.scss';

export const AboutMe = ({ introduction, description }) => {
	return (
		<div className='about-me'>
			<p>{introduction}</p>
			<ul>
				{description?.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};
