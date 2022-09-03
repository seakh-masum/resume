import React from 'react';
import '../styles/stepper.scss';

export const Stepper = (props) => {
	return (
		<div className='stepper'>
			<div className='stepper__pointer flex__column'>
				<div
					className={
						'stepper__circle flex align__center-center ' +
						(!props.isMobile && 'desktop')
					}>
					{props.stepperIndex}
				</div>
				{props.hasLine && (
					<div
						className={'stepper__line ' + (props.isMobile && 'mobile')}></div>
				)}
			</div>
			<div className='stepper__text-container'>
				<span>{props.heading}</span>
				<p>{props.subHeading}</p>
				<b>{props.desc}</b>
			</div>
		</div>
	);
};
