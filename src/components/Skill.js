import '../styles/skill.scss';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../helper/GlobalService';
import { onSnapshot } from 'firebase/firestore';

export const SkillList = () => {
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		getSkills();
	}, []);

	const getSkills = () => {
		const q = firebaseQuery('skills');
		onSnapshot(q, (querySnapshot) => {
			setSkills(firebaseDataMapping(querySnapshot));
		});
	};
	const Skill = (props) => {
		return (
			<a
				href={props.link}
				target='_blank'
				rel='noreferrer'
				className='circle__container flex__column align__center-center'>
				<div className='percent'>
					<svg height='100' width='100' className='skill'>
						<circle cx='50' cy='50' r='40'></circle>
						<circle
							cx='50'
							cy='50'
							r='40'
							style={{
								stroke: props.color,
								strokeDashoffset: `calc(625px - (250px * ${props.value}) / 100)`,
							}}></circle>
					</svg>
					<div className='position__center'>
						<img className='skill' src={props.image} alt=''></img>
					</div>
				</div>
				<span>{props.label}</span>
			</a>
		);
	};
	return (
		<div className='grid__col-3 gap-2'>
			{skills?.map((item, index) => (
				<div key={index} className='flex__33 align__center-center'>
					<Skill
						color={item.color}
						image={item.icon}
						label={item.name}
						value={item.value}
						link={item.link}
					/>
				</div>
			))}
		</div>
	);
};
