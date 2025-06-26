import { useState, useEffect, useContext } from 'react';
import { Card } from './components/ui/Card';
import { HobbyList } from './components/features/Hobby';
import { ProjectList } from './components/features/Project';
import { SkillList } from './components/features/Skill';
import { AboutMe } from './components/features/AboutMe';
import { Profile } from './components/features/Profile';
import { Experience } from './components/features/Experience';
import { Education } from './components/features/Education';
import { onSnapshot } from 'firebase/firestore';
import { firebaseDataMapping, firebaseQuery } from './helper/GlobalService';
import { ResponsiveContext } from './helper/ResponsiveContext';
import { DownloadBtn } from './components/features/DownloadBtn';
import { ToolList } from './components/features/Tool';


function App() {
	const [profile, setProfile] = useState({});
	const [isLoading, setLoading] = useState(true);
	const isMobile = useContext(ResponsiveContext);

	useEffect(() => {
		getProfile();
	}, [isLoading]);

	const getProfile = () => {
		const query = firebaseQuery('profile');
		onSnapshot(query, (querySnapshot) => {
			const data = firebaseDataMapping(querySnapshot);
			setProfile(data[0]);
		});
		setLoading(false);
	};

	return (
		<>
			{/* {loading ? ( */}
			<div className='w-full bg-neutral-100 dark:bg-neutral-950'>
				<div className='relative my-0 mx-auto p-3 max-w-7xl'>
					<div className='flex gap-3 sm:flex-row flex-col'>
						<div className='flex flex-col basis-1/3'>
							<Profile
								name={profile?.name}
								image={profile?.image}
								role={profile?.role}
								isLoading={isLoading}
							/>
							<Card header='Hobbies'>
								<HobbyList />
							</Card>
							<Card header='Skills'>
								<SkillList />
							</Card>
							{/* <Card header='Tools'>
								<ToolList />
							</Card> */}
						</div>
						<div className='flex flex-col basis-2/3'>
							<Card header='About Me'>
								<AboutMe
									introduction={profile.introduction}
									description={profile.description}
									isLoading={isLoading}
								/>
							</Card>
							<Card header='Experience'>
								<Experience isMobile={isMobile} />
							</Card>
							<Card header='Education'>
								<Education isMobile={isMobile} />
							</Card>
							<Card header='Projects'>
								<ProjectList />
							</Card>
						</div>
					</div>
					<DownloadBtn />
				</div>
			</div>
		</>
	);
}

export default App;
