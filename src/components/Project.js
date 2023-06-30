import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../helper/GlobalService';
// import '../styles/project.scss';a
import useModal from '../hooks/useModal';
import Dialog from './Dialog';
import ProjectDetails from './ProjectDetails'

export const ProjectList = ({ isMobile }) => {
	const [projects, setProjects] = useState([]);
	const { setDialog, closeDialog } = useModal();


	useEffect(() => {
		getProjects();
	}, []);

	const getProjects = () => {
		const q = firebaseQuery('projects');
		onSnapshot(q, (querySnapshot) => {
			setProjects(firebaseDataMapping(querySnapshot));
		});
	};

	const viewProjectDetails = (e, data) => {
		setDialog(
			<Dialog title='Project Details' width='300px' closeModal={closeDialog}>
				<ProjectDetails data={data} />
			</Dialog>
		);
	}

	return (
		// 'projects gap-3 ' + (isMobile ? 'grid__col-1' : 'grid__col-3')
		<ul
			className=
			'pl-5 grid gap-3 sm:grid-cols-3 grid-cols-1'
		>
			{projects.map((item, index) => (
				// console.log(item)
				<li key={index} className='projects__box bg-neutral-100 list-none py-3 px-4 rounded-lg mb-0 dark:bg-neutral-800' onClick={(e) => viewProjectDetails(e, item)}>
					{/* href={item.link} */}
					<b className='text-neutral-800 text-base dark:text-neutral-100'>
						{item.title}
					</b>
					<p className='text-neutral-500 text-xs dark:text-neutral-300'>{item.desc}</p>
				</li>
			))}
		</ul>
	);
};
