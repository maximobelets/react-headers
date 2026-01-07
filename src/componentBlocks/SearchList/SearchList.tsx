import { SearchListItem } from "../SearchListItem";

import s from './SearchList.module.css';

interface SearchListProps {
	data: Array<string>,
	isActive: boolean,
	onClick: (item) => void,
	className: string,
}

export const SearchList = ({ data, isActive, onClick, className }: SearchListProps) => {

	return (
		<ul className={`${s.root} ${isActive && s.active} ${className}`}>
			{data.map((el: string) => (
				<SearchListItem name={el} onClick={onClick} key={el} />
			))}
		</ul>
	)
}
