import { ISearchListItem } from '../../types/types';

import s from './SearchListItem.module.css';

export const SearchListItem = ({name}: ISearchListItem) => {
	return (
		<h1 className={s.root}>
			{name}
		</h1>
	)
}
