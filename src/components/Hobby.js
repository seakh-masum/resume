import React, { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import '../styles/hobby.scss';
import { firebaseQuery, firebaseDataMapping } from '../helper/GlobalService';

export const HobbyList = (props) => {
	const [hobbies, setHobbies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		if (loading) {
			const q = firebaseQuery('hobbies');
			onSnapshot(q, (querySnapshot) => {
				setHobbies(firebaseDataMapping(querySnapshot));
			});
		}
	}, [loading]);

	return (
		<div className='chip__wrapper flex__row flex__wrap align__start-center'>
			{hobbies.map((item, index) => (
				<div
					key={index}
					className={'chip color__' + item.color}
					style={{ fontSize: props.isMobile && '0.8rem' }}>
					<img src={item.icon} alt=''></img>
					{item.name}
				</div>
			))}
		</div>
	);
};
