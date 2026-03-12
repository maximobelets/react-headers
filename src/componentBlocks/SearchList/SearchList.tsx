import { HTMLAttributes } from 'react';

import s from './SearchList.module.css';

interface SearchListProps extends HTMLAttributes<HTMLUListElement> {
	data: Array<string>,
	isActive: boolean,
	className?: string,
	onElementSelect: (value: string) => void
}

export const SearchList = ({ isActive, data, className, onElementSelect, ...props }: SearchListProps) => {
	return (
		<ul className={`${s.root} ${isActive && s.active} ${className}`}
			{ ...props }
		>
			{data.map((element: string, index: number) => (
				<li onClick={() => onElementSelect(element)} key={`${element} - ${index}`}>
					{element}
				</li>
			))}
		</ul>
	)
}
