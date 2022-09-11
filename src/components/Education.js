import React, { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { Stepper } from './Stepper';
import { firebaseQuery, firebaseDataMapping } from '../helper/GlobalService';

export const Education = (props) => {
	const [education, setEducation] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		if (loading) {
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
		}
	}, [loading]);

	return (
		<div className='stepper__container flex__column'>
			{education.map((item, index) => (
				<Stepper
					key={index}
					isMobile={props.isMobile}
					hasLine={education.length !== index + 1}
					stepperIndex={props.isMobile ? index + 1 : item.stepperIndex}
					heading={item.course}
					subHeading={item.institute}
					desc={item.marks}
					link={item.link}
				/>
			))}
		</div>
	);
};
