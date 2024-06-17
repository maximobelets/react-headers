import { SearchListItem } from "../SearchListItem";

import s from './SearchList.module.css';

export const SearchList = ({data, isActive}: any) => {
	return (
		<ul className={`${s.root} ${isActive && s.active}`}>
			{data.map((el: any) => (
				<SearchListItem name={el.name} key={el.name} />
			))}
		</ul>
	)
}
