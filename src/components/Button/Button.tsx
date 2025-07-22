import React from 'react';

import s from './Button.module.css';

interface ButtonProps {
	children?: React.ReactNode;
	type?: 'submit' | 'reset' | 'button';
	onClick?: () => void;
}

export const Button = ({ children = 'Click Me!', type, onClick }: ButtonProps) => {
	return (
		<button className={s.root} type={type} onClick={onClick}>
			{children}
		</button>
	)
};
