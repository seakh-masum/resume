import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../helper/GlobalService';
import '../styles/contact.scss';

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
		<div
			className={`contact__wrapper grid__col-4 ${
				isMobile ? 'gap-3' : 'gap-5'
			}`}>
			{contacts.map((item, index) => (
				<a
					href={item.link}
					key={index}
					className='contact__item align__center-center'
					style={{
						background: item.color,
					}}>
					<img
						className='contact__image'
						style={{ width: isMobile ? '1.5rem' : '2rem' }}
						src={item.icon}
						alt=''></img>
				</a>
			))}
		</div>
	);
};
