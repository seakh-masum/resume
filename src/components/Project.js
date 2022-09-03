import React, { useState, useEffect } from 'react';
import '../styles/project.scss';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export const ProjectList = (props) => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		if (loading) {
			const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
			onSnapshot(q, (querySnapshot) => {
				setProjects(
					querySnapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					})),
				);
			});
		}
	}, [loading]);

	return (
		<ul
			className={
				'projects gap-3 ' + (props.isMobile ? 'grid__col-1' : 'grid__col-3')
			}>
			{projects.map((item, index) => (
				<li key={index} className='projects__box'>
					<a target='_blank' rel='noreferrer' href={item.link}>
						{item.title}
					</a>
					<p>{item.desc}</p>
				</li>
			))}
		</ul>
	);
};
