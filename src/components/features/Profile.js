import React from 'react';
import SkeletonLine from '../loader/SkeletonLine';

export const Profile = ({ name, role, image, isLoading }) => {
	return (
		<div className={`${isLoading && 'animate-pulse'} p-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl mb-5 dark:from-sky-700 dark:to-indigo-700`}>
			<div className='container'>
				<div className='flex flex-col items-center justify-center'>
					<div className='relative mt-8'>
						<svg height='250' width='250' className='relative'>
							<circle cx='125' cy='125' r='110' strokeLinecap='round' strokeWidth={10} className='w-full h-full fill-none stroke-transparent'></circle>
							<circle cx='125' cy='125' r='110' strokeLinecap='round' strokeWidth={10} strokeDasharray='625px' strokeDashoffset={`calc(625px - (685px * 50) / 100)`} className='stroke-cyan-500 w-full h-full fill-none dark:stroke-cyan-300' ></circle>
						</svg>
						<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
							{isLoading ?
								<div className='rounded-full w-52 h-52 bg-neutral-700'></div>
								:
								<img src={image} alt='' className='rounded-full w-52 h-52' style={{ maxWidth: 208 + 'px' }} />
							}
						</div>
					</div>
				</div>
				<div className='bg-neutral-100 -mt-24 rounded-2xl border-2 border-violet-600 dark:bg-neutral-950 dark:border-violet-800'>
					<div className='flex flex-col items-center justify-center pt-24 p-5 gap-3'>
						{
							isLoading ?
								<>
									<SkeletonLine width={`4/5`} />
									<SkeletonLine width={`3/5`} />
								</> :
								<>
									<h1 className='font-dancing_script text-6xl dark:text-white'>{name}</h1>
									<i className='text-neutral-500'>{role}</i>
								</>
						}
					</div>
				</div>
			</div>
		</div>
	);
};
