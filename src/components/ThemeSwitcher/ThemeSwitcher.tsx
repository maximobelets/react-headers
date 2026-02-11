import React, { useState } from 'react';

import SunIcon from '../../assets/icons/sun-icon.svg?react';

import s from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
	const [on, setOn] = useState(false);

	return (
		<div
			className={`${s.root} ${on && s.on}`}
			onClick={() => setOn(!on)}
		>
			<div className={`${s.thumb} ${on && s.thumbAnimation}`} />
			<SunIcon />
		</div>
	)
};
