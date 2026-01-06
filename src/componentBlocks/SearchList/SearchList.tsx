import { SearchListItem } from "../SearchListItem";

import s from './SearchList.module.css';

interface SearchListProps {
	data: Array<string>,
	isActive: boolean,
	onClick: (item) => void,
}

export const SearchList = ({ data, isActive, onClick }: SearchListProps) => {

	return (
		<ul className={`${s.root} ${isActive && s.active}`}>
			{data.map((el: string) => (
				<SearchListItem name={el} onClick={onClick} key={el} />
			))}
		</ul>
	)
}
