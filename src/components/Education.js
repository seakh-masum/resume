import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Stepper } from './Stepper';

export const Education = (props) => {
	const [education, setEducation] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		if (loading) {
			const q = query(collection(db, 'education'), orderBy('order', 'asc'));
			onSnapshot(q, (querySnapshot) => {
				setEducation(
					querySnapshot.docs
						.map((doc) => ({
							id: doc.id,
							...doc.data(),
						}))
						.map((res) => ({
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
				/>
			))}
		</div>
	);
};
