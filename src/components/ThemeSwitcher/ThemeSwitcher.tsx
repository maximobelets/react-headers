import { useState } from 'react';

import SunIcon from '../../assets/icons/sun-icon.svg?react';
import HalfMoonIcon from '../../assets/icons/half-moon-icon.svg?react';

import s from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	return (
		<div
			className={`${s.root} ${isDarkTheme && s.on}`}
			onClick={() => setIsDarkTheme(!isDarkTheme)}
		>
			<div className={`${s.thumb} ${isDarkTheme && s.thumbAnimation}`}>
				{isDarkTheme ? (
					<HalfMoonIcon className={s.icon} />
				): (
					<SunIcon className={s.icon} />
				)}
			</div>
		</div>
	)
};
