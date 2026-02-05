import React, { useState } from 'react';

import { Button } from '../Button';

import s from './ThemeSwitcher.module.css';

interface ThemeSwitcherProps {
	// add later
}

export const ThemeSwitcher = () => {
	const [theme, setTheme] = useState('light');

	const changeTheme = () => setTheme(prevState => prevState === 'light' ? 'dark' : 'light');

	return (
		<Button onClick={changeTheme}>
			Theme is {theme}
		</Button>
	)
};
