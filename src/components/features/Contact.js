import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../../helper/GlobalService';

export const ContactList = ({ isMobile }) => {
	const [contacts, setContacts] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setContacts(Array(4).fill(0))
		getContacts();
	}, []);

	const getContacts = () => {
		const query = firebaseQuery('contacts');
		onSnapshot(query, (querySnapshot) => {
			setContacts(firebaseDataMapping(querySnapshot).map((res => {
				res.icon = res.icon.replace('upload',
					`upload/co_rgb:fff,e_colorize:100,f_png,h_96`);
				return res;
			})));
		});
		setLoading(false);
	};

	return (
		<div
			className='p-6 pt-2 grid grid-cols-4 sm:gap-5 gap-6'>
			{contacts.map((item, index) => (
				<a
					href={item?.link}
					key={index}
					className={`${isLoading ? 'animate-pulse' : ''} bg-neutral-200 dark:bg-neutral-700 aspect-square rounded-full leading-8 grid place-content-center shadow-[${item.color}] shadow-lg`}
					style={{
						background: isLoading ? '#404040' : item?.color,
						boxShadow: `0 0 8px  ${item.color}`
					}}>
					<img width='48px' height='48px'
						className='w-6'
						src={item?.icon}
						alt='' />
				</a>
			))}
		</div>
	);
};
