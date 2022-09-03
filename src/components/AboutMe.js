import React from 'react';
import { PROFILE_DATA } from '../data/ProfileData';

export const AboutMe = () => {
	return <p className='about-me-desc'>{PROFILE_DATA.aboutMe}</p>;
};
