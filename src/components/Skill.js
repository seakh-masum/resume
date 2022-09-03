import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import '../styles/skill.scss';

export const SkillList = () => {
	const [skills, setSkills] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		if (loading) {
			const q = query(collection(db, 'skills'), orderBy('order', 'asc'));
			onSnapshot(q, (querySnapshot) => {
				setSkills(
					querySnapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					})),
				);
			});
		}
	}, [loading]);

	const Skill = (props) => {
		return (
			<div className='circle__container flex__column align__center-center'>
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
			</div>
		);
	};
	return (
		<div className='flex__row flex__wrap'>
			{skills?.map((item, index) => (
				<div key={index} className='flex__33 align__center-center'>
					<Skill
						color={item.color}
						image={item.icon}
						label={item.name}
						value={item.value}
					/>
				</div>
			))}
		</div>
	);
};
