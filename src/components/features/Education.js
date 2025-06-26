import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery } from '../../helper/GlobalService';
import { Stepper } from '../ui/Stepper';
import SkeletonList from '../loader/SkeletonList';

export const Education = ({ isMobile }) => {
	const [isLoading, setLoading] = useState(true);
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
		setLoading(false);
	};

	return (
		<div className='mt-4 mr-0 mb-0 ml-6'>
			{isLoading ?
				<SkeletonList /> :
				<>
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
				</>
			}

		</div>
	);
};
