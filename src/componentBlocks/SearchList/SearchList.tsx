import { SearchListItem } from "../SearchListItem";

import s from './SearchList.module.css';

interface SearchListProps {
	data: Array<string>,
	isActive: boolean,
}

export const SearchList = ({data, isActive}: SearchListProps) => {

	return (
		<ul className={`${s.root} ${isActive && s.active}`}>
			{data.map((el: string) => (
				<SearchListItem name={el} key={el} />
			))}
		</ul>
	)
}
