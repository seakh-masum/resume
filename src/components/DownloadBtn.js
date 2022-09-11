import React from 'react';

export const DownloadBtn = () => {
	const style = {
		width: '50px',
		background: 'linear-gradient(90deg, #9331e0, #34c4f9 99.99%, #2fdaff)',
		height: '50px',
		display: 'grid',
		placeContent: 'center',
		borderRadius: '50%',
		boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 50%)',
		position: 'fixed',
		bottom: 10,
		right: 10,
		zIndex: 50,
	};
	const downloadLink =
		'https://drive.google.com/uc?export=download&id=1wFlDhiZhSYjl1mwk5tFzDulh3DqP9f4F';
	return (
		<a href={downloadLink} target='_blank' rel='noreferrer' style={style}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				height='24px'
				viewBox='0 0 24 24'
				width='24px'
				fill='#FFFFFF'>
				<path d='M0 0h24v24H0V0z' fill='none' />
				<path d='M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z' />
			</svg>
		</a>
	);
};
