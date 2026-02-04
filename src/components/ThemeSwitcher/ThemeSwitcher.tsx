import React from 'react';

import s from './ThemeSwitcher.module.css';

interface ThemeSwitcherProps {
	children?: React.ReactNode;
	type?: 'submit' | 'reset' | 'button';
	onClick?: () => void;
	variant?: 'standard' | 'outline' | 'cancel'
}

export const ThemeSwitcher = () => {
	return (
		<div>
			ThemeSwitcher
		</div>
	)
};
