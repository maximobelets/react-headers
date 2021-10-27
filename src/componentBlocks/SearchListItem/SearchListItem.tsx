import css from './SearchListItem.module.css';

export const SearchListItem = ({name}: any) => {
	return (
		<h1 className={css.root}>
			{name}
		</h1>
	)
}
