import React, { useState, useEffect } from 'react';
import '../styles/project.scss';
import { onSnapshot } from 'firebase/firestore';
import { firebaseQuery, firebaseDataMapping } from '../services/GlobalService';

export const ProjectList = (props) => {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		if (loading) {
			const q = firebaseQuery('projects');
			onSnapshot(q, (querySnapshot) => {
				setProjects(firebaseDataMapping(querySnapshot));
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
