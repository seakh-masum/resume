import React, { useState, useEffect } from 'react';
import '../styles/contact.scss';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export const ContactList = (props) => {
	const [contacts, setContacts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		if (loading) {
			const q = query(collection(db, 'contacts'), orderBy('order', 'asc'));
			onSnapshot(q, (querySnapshot) => {
				setContacts(
					querySnapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					})),
				);
			});
		}
	}, [loading]);

	return (
		<div className='contact__wrapper grid__col-4 gap-5'>
			{contacts.map((item, index) => (
				<div
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
				</div>
			))}
		</div>
	);
};
