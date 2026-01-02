import { SearchListItem } from "../SearchListItem";
import { ISearchListItem } from "../../types/types";

import s from './SearchList.module.css';

export const SearchList = ({data, isActive}: any) => {
	return (
		<ul className={`${s.root} ${isActive && s.active}`}>
			{data.map((el: ISearchListItem) => (
				<SearchListItem name={el.name} key={el.name} />
			))}
		</ul>
	)
}
