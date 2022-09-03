import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Stepper } from './Stepper';

export const Experience = (props) => {
	const [experience, setExperience] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		if (loading) {
			const q = query(collection(db, 'experience'), orderBy('order', 'asc'));
			onSnapshot(q, (querySnapshot) => {
				setExperience(
					querySnapshot.docs
						.map((doc) => ({
							id: doc.id,
							...doc.data(),
						}))
						.map((item) => {
							let obj = {};
							const fromYear = new Date(item.from).getFullYear();
							const fromMonth = new Date(item.from).getMonth();
							const toYear =
								item.to === 'Present'
									? new Date().getFullYear()
									: new Date(item.to).getFullYear();

							const toMonth =
								item.to === 'Present'
									? new Date().getMonth()
									: new Date(item.to).getMonth();

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
									: `${fromYear}-${
											item.to === 'Present'
												? item.to
												: new Date(item.to).getFullYear()
									  }`;

							return { ...item, ...obj };
						}),
				);
			});
		}
	}, [loading]);

	return (
		<div className='stepper__container flex__column'>
			{experience.map((item, index) => (
				<Stepper
					key={index}
					isMobile={props.isMobile}
					hasLine={experience.length !== index + 1}
					stepperIndex={props.isMobile ? index + 1 : item.stepperIndex}
					heading={item.company}
					subHeading={item.role}
					desc={item.tenure}
				/>
			))}
		</div>
	);
};
