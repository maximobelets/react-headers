import React from 'react';

import s from './Header.module.css';

interface IProps {
	title: string,
	backgroundColor: string,
	color: string,
};

export const Header = ({title, backgroundColor, color}: IProps) => {
	return (
		<header className={s.root} style={{backgroundColor}}>
			<h1 className={s.title} style={{color}}>
				{title}
			</h1>
		</header>
	)
}