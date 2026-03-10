import { ReactNode } from 'react';

export interface ListItem {
	children: ReactNode
	onClick?: () => void,
};

import s from './ListItem.module.css';

export const ListItem = ({ children, onClick }: ListItem) => {
	const handleClick = () => onClick();

	return (
		<li className={s.root} onClick={handleClick}>
			{children}
		</li>
	)
}
