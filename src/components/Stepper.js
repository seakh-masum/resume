import React from 'react';

export const Stepper = (props) => {
	return (
		// className='stepper'
		<div className='flex mb-2'>
			{/* className='stepper__pointer flex__column' */}
			<div className='items-center pr-6 flex flex-col'>
				{/* {
						'stepper__circle flex align__center-center ' +
						(!props.isMobile && 'desktop')
					} */}
				<div
					className={`stepper__circle text-white flex w-full text-xs bg-blue-500 mb-1 h-8 aspect-square relative rounded-full items-center justify-center sm:aspect-third_one sm:rounded-none leading-8 ${!props.isMobile ? `before:content-[''] before:absolute before:-left-4 before:top-0 before:border-solid before:border-y-transparent before:border-r-blue-500 before:border-y-[16px] before:border-r-[16px]` : ''}`}>
					{props.stepperIndex}
				</div>
				{props.hasLine && (
					// className={'stepper__line ' + (props.isMobile && 'mobile')}
					<div
						className='w-[2px] bg-blue-500 h-full sm:w-1'></div>
				)}
			</div>
			{/* className='stepper__text-container' */}
			<div className='-mt-1 mx-0 mb-4'>
				<a href={props.link} target='_blank' rel='noreferrer' className='mb-2 leading-4 text-base font-medium'>
					{props.heading}
				</a>
				<p className='text-sm mb-1 leading-none text-neutral-500'>{props.subHeading}</p>
				<b className='text-md mb-4 leading-3'>{props.desc}</b>
			</div>
		</div >
	);
};
