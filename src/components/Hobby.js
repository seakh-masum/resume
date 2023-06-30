import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../helper/GlobalService';
// import '../styles/hobby.scss';

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
		<div className='flex flex-row flex-wrap justify-start items-center gap-2 pl-2'>
			{hobbies.map((item, index) => (
				<div
					key={index}
					className={`bg-${item.color}-100 text-${item.color}-500 sm:text-base text-sm inline-flex py-1 px-3 rounded-2xl items-center relative gap-1 h-8 dark:bg-${item.color}-100 dark:text-${item.color}`}>
					<img src={item.icon} alt='' className='w-4'></img>
					{item.name}
				</div>
			))}
		</div>
	);
};
