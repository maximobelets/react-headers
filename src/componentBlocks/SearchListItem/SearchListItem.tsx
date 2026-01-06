import { ISearchListItem } from '../../types/types';

import s from './SearchListItem.module.css';

export const SearchListItem = ({ name, onClick }: ISearchListItem) => {
	return (
		<h1 className={s.root} onClick={() => onClick(name)}>
			{name}
		</h1>
	)
}
