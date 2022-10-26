import './styles/global.scss';
import React, { useState, useEffect, useContext } from 'react';
import { Card } from './components/Card';
import { ContactList } from './components/Contact';
import { HobbyList } from './components/Hobby';
import { ProjectList } from './components/Project';
import { SkillList } from './components/Skill';
import { AboutMe } from './components/AboutMe';
import { Profile } from './components/Profile';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { onSnapshot } from 'firebase/firestore';
import { firebaseDataMapping, firebaseQuery } from './helper/GlobalService';
import { ResponsiveContext } from './helper/ResponsiveContext';
import { DownloadBtn } from './components/DownloadBtn';
import { Loader } from './components/Loader';

function App() {
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(false);
	const isMobile = useContext(ResponsiveContext);

	useEffect(() => {
		setLoading(false);
		getProfile();
		setLoading(true);
	}, [loading]);

	const getProfile = () => {
		const query = firebaseQuery('profile');
		onSnapshot(query, (querySnapshot) => {
			const data = firebaseDataMapping(querySnapshot);
			setProfile(data[0]);
		});
	};

	return (
		<>
			{loading ? (
				<div className='background'>
					<div className={'gap-3 ' + (isMobile ? 'flex__column' : 'flex__row')}>
						<div className='flex__column flex__33'>
							<Profile
								name={profile.name}
								image={profile.image}
								role={profile.role}
							/>
							<Card header='Contacts'>
								<ContactList isMobile={isMobile} />
							</Card>
							<Card header='Hobbies'>
								<HobbyList isMobile={isMobile} />
							</Card>
							<Card header='Skills'>
								<SkillList />
							</Card>
						</div>
						<div className='flex__column flex__67'>
							<Card header='About Me'>
								<AboutMe
									introduction={profile.introduction}
									description={profile.description}
								/>
							</Card>
							<Card header='Experience'>
								<Experience isMobile={isMobile} />
							</Card>
							<Card header='Education'>
								<Education isMobile={isMobile} />
							</Card>
							<Card header='Projects'>
								<ProjectList isMobile={isMobile} />
							</Card>
						</div>
					</div>
					<DownloadBtn />
				</div>
			) : (
				<Loader />
			)}
		</>
	);
}

export default App;
