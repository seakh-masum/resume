import React from 'react';
import '../styles/profile.scss';

export const Profile = ({ name, role, image }) => {
	return (
		<div className='card profile'>
			<div className='container'>
				<div className='flex__column align__center-center'>
					<div className='container__svg'>
						<svg height='250' width='250'>
							<circle cx='125' cy='125' r='110'></circle>
							<circle cx='125' cy='125' r='110'></circle>
						</svg>
						<div className='position__center'>
							<img src={image} alt='' />
						</div>
					</div>
				</div>
				<div className='container__bottom'>
					<div className='container__text flex__column align__center-center'>
						<h1>{name}</h1>
						<i>{role}</i>
					</div>
				</div>
			</div>
		</div>
	);
};
