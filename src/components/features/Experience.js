import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firebaseDataMapping, firebaseQuery, getMonth, getYear } from '../../helper/GlobalService';
import { Stepper } from '../ui/Stepper';
import SkeletonList from '../loader/SkeletonList';

export const Experience = ({ isMobile }) => {
	const [isLoading, setLoading] = useState(true);
	const [experience, setExperience] = useState([]);

	useEffect(() => {
		getExperience();
	}, []);

	const getExperience = () => {
		const q = firebaseQuery('experience');
		onSnapshot(q, (querySnapshot) => {
			setExperience(
				firebaseDataMapping(querySnapshot).map((item) => {
					let obj = {};
					const fromYear = getYear(item.joiningDate);
					const fromMonth = getMonth(item.joiningDate);
					const toYear =
						item.releaseDate ? getYear(item.releaseDate) : new Date().getFullYear();

					const toMonth =
						item.releaseDate ? getMonth(item.releaseDate) : new Date().getMonth() + 1;

					const monthDifference = toMonth - fromMonth;
					const monthGap =
						monthDifference > 0 ? monthDifference : 12 + monthDifference;
					const yearGap =
						monthDifference > 0 ? toYear - fromYear : toYear - fromYear - 1;

					obj.tenure =
						yearGap > 0
							? `${yearGap} Year  ${monthGap} Months`
							: `${monthGap} Months`;
					obj.stepperIndex =
						fromYear === toYear
							? `${toYear}`
							: `${fromYear}-${toYear}`;

							// // ${item.to === 'Present'
							// // 	? item.to
							// // 	: new Date(item.to).getFullYear()
							// }`;

					return { ...item, ...obj };
				}),
			);
		});

		setLoading(false);
	};

	return (
		<div className='mt-4 mr-0 mb-0 ml-6'>
			{isLoading ?
				<SkeletonList /> :
				<>
					{experience.map((item, index) => (
						<Stepper
							key={index}
							isMobile={isMobile}
							hasLine={experience.length !== index + 1}
							stepperIndex={isMobile ? index + 1 : item.stepperIndex}
							heading={item.company}
							subHeading={item.role}
							desc={item.tenure}
							link={item.link}
						/>
					))}
				</>
			}

		</div>
	);
};
