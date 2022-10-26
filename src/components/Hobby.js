import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../helper/GlobalService';
import '../styles/hobby.scss';

export const HobbyList = ({ isMobile }) => {
	const [hobbies, setHobbies] = useState([]);

	useEffect(() => {
		getHobbies();
	}, []);

	const getHobbies = () => {
		const q = firebaseQuery('hobbies');
		onSnapshot(q, (querySnapshot) => {
			setHobbies(firebaseDataMapping(querySnapshot));
		});
	};

	return (
		<div className='chip__wrapper flex__row flex__wrap align__start-center'>
			{hobbies.map((item, index) => (
				<div
					key={index}
					className={'chip color__' + item.color}
					style={{ fontSize: isMobile && '0.8rem' }}>
					<img src={item.icon} alt=''></img>
					{item.name}
				</div>
			))}
		</div>
	);
};
