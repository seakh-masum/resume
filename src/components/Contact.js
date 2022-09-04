import React, { useState, useEffect } from 'react';
import '../styles/contact.scss';
import { onSnapshot } from 'firebase/firestore';
import { firebaseDataMapping, firebaseQuery } from '../services/GlobalService';

export const ContactList = (props) => {
	const [contacts, setContacts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		if (loading) {
			const query = firebaseQuery('contacts');
			onSnapshot(query, (querySnapshot) => {
				setContacts(firebaseDataMapping(querySnapshot));
			});
		}
	}, [loading]);

	return (
		<div className='contact__wrapper grid__col-4 gap-5'>
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
						style={{ width: props.isMobile ? '1.5rem' : '2rem' }}
						src={item.icon}
						alt=''></img>
				</a>
			))}
		</div>
	);
};
