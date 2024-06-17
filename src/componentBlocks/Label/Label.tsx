import React from 'react';

import s from './Label.module.css';

interface LabelProps {
	htmlFor?: string;
	children?: React.ReactNode;
}

export const Label = ({htmlFor, children}: LabelProps) => {
	return (
		<label className={s.root} htmlFor={htmlFor}>
			{children}
		</label>
	)
}
