import React from 'react';

import s from './Button.module.css';

interface ButtonProps {
	children?: React.ReactNode;
	type?: 'submit' | 'reset' | 'button';
}

export const Button = ({children = 'Click Me!', type}: ButtonProps) => {
	return (
		<button className={s.root} type={type}>
			{children}
		</button>
	)
};
