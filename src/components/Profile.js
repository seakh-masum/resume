import React from 'react';
import '../styles/profile.scss';
import { PROFILE_DATA } from '../data/ProfileData';

export const Profile = () => {
	return (
		<div className='card profile'>
			<div className='container'>
				<div className='container__top flex__column align__center-center'>
					<div className='container__svg'>
						<svg height='250' width='250'>
							<circle cx='125' cy='125' r='110'></circle>
							<circle cx='125' cy='125' r='110'></circle>
						</svg>
						<div className='position__center'>
							<img src={PROFILE_DATA.profileImg} alt='' />
						</div>
					</div>
				</div>
				<div className='container__bottom'>
					<div className='container__text flex__column align__center-center'>
						<h1>{PROFILE_DATA.name}</h1>
						<i>{PROFILE_DATA.role}</i>
					</div>
				</div>
			</div>
		</div>
	);
};
