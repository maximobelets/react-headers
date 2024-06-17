import React from 'react';

import { Wrapper } from '../../componentBlocks/Wrapper';

import s from './Button.module.css';

interface ButtonProps {
	children?: React.ReactNode;
	type?: 'submit' | 'reset' | 'button';
}

export const Button = ({children = 'Click Me!', type}: ButtonProps) => {
	return (
		<Wrapper>
			<button className={s.root} type={type}>
				{children}
			</button>
		</Wrapper>
	)
};
