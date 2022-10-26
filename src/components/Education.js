import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../helper/GlobalService';
import { Stepper } from './Stepper';

export const Education = ({ isMobile }) => {
	const [education, setEducation] = useState([]);

	useEffect(() => {
		getEducation();
	}, []);

	const getEducation = () => {
		const q = firebaseQuery('education');
		onSnapshot(q, (querySnapshot) => {
			setEducation(
				firebaseDataMapping(querySnapshot).map((res) => ({
					...res,
					stepperIndex: `${res.from} - ${res.to}`,
					marks: `${res.marks} %`,
				})),
			);
		});
	};

	return (
		<div className='stepper__container flex__column'>
			{education.map((item, index) => (
				<Stepper
					key={index}
					isMobile={isMobile}
					hasLine={education.length !== index + 1}
					stepperIndex={isMobile ? index + 1 : item.stepperIndex}
					heading={item.course}
					subHeading={item.institute}
					desc={item.marks}
					link={item.link}
				/>
			))}
		</div>
	);
};
