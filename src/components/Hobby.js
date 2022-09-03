import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/hobby.scss';

export const HobbyList = (props) => {
	const [hobbies, setHobbies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		if (loading) {
			const q = query(collection(db, 'hobbies'), orderBy('order', 'asc'));
			onSnapshot(q, (querySnapshot) => {
				setHobbies(
					querySnapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					})),
				);
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
