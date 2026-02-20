import { ISearchListItem } from '../../types/types';

import s from './SearchListItem.module.css';

export const SearchListItem = ({ name, onClick }: ISearchListItem) => {
	const handleClick = () => onClick(name);

	return (
		<li className={s.root} onClick={handleClick}>
			{name}
		</li>
	)
}
