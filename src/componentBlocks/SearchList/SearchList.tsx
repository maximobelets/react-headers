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
			{data.map((element: string, index: number) => (
				<li onClick={() => onClick(element)} key={`${element} - ${index}`}>
					{element}
				</li>
			))}
		</ul>
	)
}
