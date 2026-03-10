import { ListItem } from "../ListItem";

import s from './SearchList.module.css';

interface SearchListProps {
	data: Array<string>,
	isActive: boolean,
	onClick: (item: string) => void
	className?: string,
}

export const SearchList = ({ data, isActive, onClick, className }: SearchListProps) => {
	return (
		<ul className={`${s.root} ${isActive && s.active} ${className}`}>
			{data.map((el: string, index: number) => (
				<li onClick={() => onClick(el)} key={`${el} - ${index}`}>
					{el}
				</li>
			))}
		</ul>
	)
}
