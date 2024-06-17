import s from './SearchListItem.module.css';

interface SearchListItemProps {
	name: string,
};

export const SearchListItem = ({name}: SearchListItemProps) => {
	return (
		<h1 className={s.root}>
			{name}
		</h1>
	)
}
