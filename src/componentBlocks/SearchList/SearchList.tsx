import { SearchListItem } from "../SearchListItem";

import css from './SearchList.module.css';

export const SearchList = ({data, isActive}: any) => {
	return (
		<ul className={`${css.root} ${isActive && css.active}`}>
			{data.map((el: any) => (
				<SearchListItem name={el.name} key={el.name} />
			))}
		</ul>
	)
}
