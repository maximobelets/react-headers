import { SearchListItem } from "../SearchListItem";
import { ISearchListItem } from "../../types/types";

import s from './SearchList.module.css';

interface SearchListProps {
	data: any,
	isActive: boolean,
}

export const SearchList = ({data, isActive}: SearchListProps) => {
	console.log(data, 'data')
	return (
		<ul className={`${s.root} ${isActive && s.active}`}>
			{data.map((el: ISearchListItem) => (
				<SearchListItem name={el.name} key={el.name} />
			))}
		</ul>
	)
}
