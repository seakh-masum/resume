import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../../helper/GlobalService';

export const ContactList = ({ isMobile }) => {
	const [contacts, setContacts] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setContacts([1, 2, 3, 4, 5, 6, 7, 8])
		getContacts();
	}, []);

	const getContacts = () => {
		const query = firebaseQuery('contacts');
		onSnapshot(query, (querySnapshot) => {
			setContacts(firebaseDataMapping(querySnapshot));
		});
		setLoading(false);
	};

	return (
		<div
			className='p-4 grid grid-cols-4 sm:gap-5 gap-6'>
			{contacts.map((item, index) => (
				<a
					href={item?.link}
					key={index}
					className={`${isLoading ? 'animate-pulse' : ''} bg-neutral-200 dark:bg-neutral-700 aspect-square rounded-full leading-8 grid place-content-center`}
					style={{
						background: isLoading ? '#404040' : item?.color,
					}}>
					<img width='72px' height='72px'
						className='w-6 sm:w-8'
						src={item?.icon}
						alt='' />
				</a>
			))}
		</div>
	);
};
