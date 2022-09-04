import './App.css';
import './styles/global.scss';
import React, { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { ContactList } from './components/Contact';
import { HobbyList } from './components/Hobby';
import { ProjectList } from './components/Project';
import { SkillList } from './components/Skill';
import { AboutMe } from './components/AboutMe';
import { Profile } from './components/Profile';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { checkDeviceTypeMobile } from './services/GlobalService';
import { onSnapshot } from 'firebase/firestore';
import { firebaseDataMapping, firebaseQuery } from './services/GlobalService';

function App() {
	const isMobile = checkDeviceTypeMobile();

	const [profile, setProfile] = useState({});
	const [loading1, setLoading1] = useState(false);

	useEffect(() => {
		setLoading1(true);
		const query = firebaseQuery('profile');
		onSnapshot(query, (querySnapshot) => {
			const data = firebaseDataMapping(querySnapshot);
			setProfile(data[0]);
		});
	}, [loading1]);

	return (
		<div className='background'>
			<div className={'gap-3 ' + (isMobile ? 'flex__column' : 'flex__row')}>
				<div className='flex__column flex__33'>
					<Profile
						name={profile.name}
						role={profile.role}
						image={profile.image}
					/>
					<Card
						childComponent={<ContactList isMobile={isMobile} />}
						header='Contacts'
					/>
					<Card
						childComponent={<HobbyList isMobile={isMobile} />}
						header='Hobbies'
					/>
					<Card childComponent={<SkillList />} header='Skills' />
				</div>
				<div className='flex__column flex__67'>
					<Card
						childComponent={
							<AboutMe
								introduction={profile.introduction}
								description={profile.description}
							/>
						}
						header='About Me'
					/>
					<Card
						childComponent={<Experience isMobile={isMobile} />}
						header='Experience'
					/>
					<Card
						childComponent={<Education isMobile={isMobile} />}
						header='Education'
					/>
					<Card
						childComponent={<ProjectList isMobile={isMobile} />}
						header='Projects'
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
