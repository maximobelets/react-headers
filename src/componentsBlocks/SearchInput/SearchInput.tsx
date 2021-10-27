import css from './SearchInput.module.css';

export const SearchInput = ({handleInput}: any) => {
	return (
		<input
			className={css.root}
			onChange={handleInput}
			placeholder="Search"
		/>
	)
}
