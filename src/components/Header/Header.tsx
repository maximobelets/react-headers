import React from 'react';
import { Wrapper } from '../../componentBlocks/Wrapper';

import s from './Header.module.css';

interface IProps {
	title: string,
	backgroundColor: string,
	color: string,
};

export const Header: React.FC<IProps> = ({
		title = 'Title',
		backgroundColor = 'gray',
		color = '#000',
		children = 'Text'
	}) => {

	return (
		<Wrapper>
			<header className={s.root} style={{backgroundColor}}>
				<h1 className={s.title} style={{color}}>
					{title}
				</h1>
				{children}
			</header>
		</Wrapper>
	)
}
