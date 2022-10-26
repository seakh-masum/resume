import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../helper/GlobalService';
import '../styles/project.scss';

export const ProjectList = ({ isMobile }) => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProjects();
	}, []);

	const getProjects = () => {
		const q = firebaseQuery('projects');
		onSnapshot(q, (querySnapshot) => {
			setProjects(firebaseDataMapping(querySnapshot));
		});
	};

	return (
		<ul
			className={
				'projects gap-3 ' + (isMobile ? 'grid__col-1' : 'grid__col-3')
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
