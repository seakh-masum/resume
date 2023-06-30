import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../helper/GlobalService';
// import '../styles/contact.scss';

export const ContactList = ({ isMobile }) => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getContacts();
	}, []);

	const getContacts = () => {
		const query = firebaseQuery('contacts');
		onSnapshot(query, (querySnapshot) => {
			setContacts(firebaseDataMapping(querySnapshot));
		});
	};

	return (
		// {`contact__wrapper grid__col-4 ${
		// 	isMobile ? 'gap-3' : 'gap-5'
		// }`}
		<div
			className='p-4 grid grid-cols-4 sm:gap-3 gap-4'>
			{contacts.map((item, index) => (
				// contact__item align__center-center
				<a
					href={item.link}
					key={index}
					className='aspect-square rounded-full leading-8 grid place-content-center'
					style={{
						background: item.color,
					}}>
					{/* style={{ width: isMobile ? '1.5rem' : '2rem' }} */}
					<img
						className='w-6 sm:w-8'
						src={item.icon}
						alt=''></img>
				</a>
			))}
		</div>
	);
};
