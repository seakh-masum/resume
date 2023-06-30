// import '../styles/skill.scss';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../helper/GlobalService';
import { onSnapshot } from 'firebase/firestore';
import useModal from '../hooks/useModal';
import SkillDetails from './SkillDetails';
import Dialog from './Dialog';

export const SkillList = () => {
	const [skills, setSkills] = useState([]);
	const { setDialog, closeDialog } = useModal();


	useEffect(() => {
		getSkills();
	}, []);

	const getSkills = () => {
		const q = firebaseQuery('skills');
		onSnapshot(q, (querySnapshot) => {
			setSkills(firebaseDataMapping(querySnapshot));
		});
	};

	const onSkillDetails = (e, data) => {
		setDialog(
			<Dialog title='Skill Details' width='300px' closeModal={closeDialog}>
				<SkillDetails data={data} />
			</Dialog>
		);
	}

	const Skill = ({ data }) => {
		return (
			<div
				className='flex flex-col items-center justify-center mb-3' onClick={(e) => onSkillDetails(e, data)}>
				<div className='relative'>
					<svg height='100' width='100' className='relative -rotate-90'>
						<circle cx='50' cy='50' r='40' fill='none' className='stroke-neutral-200 dark:stroke-neutral-700' strokeWidth={10} strokeLinecap='round' width='100%' height='100%'></circle>
						<circle
							cx='50'
							cy='50'
							r='40'
							fill='none' stroke={data.color} strokeWidth={10} strokeLinecap='round' width='100%' height='100%'
							strokeDashoffset={`calc(625px - (250px * ${data.value}) / 100)`} strokeDasharray='625px'
						></circle>
					</svg>
					<div className='position__center'>
						<img width='45px' height='45px' src={data.icon} alt=''></img>
					</div>
				</div>
				<span>{data.name}</span>
			</div>
		);
	};
	return (
		<div className='grid__col-3 gap-2'>
			{skills?.map((item, index) => (
				<div key={index} className='flex__33 align__center-center'>
					<Skill
						data={item}
					/>
				</div>
			))}
		</div>
	);
};
