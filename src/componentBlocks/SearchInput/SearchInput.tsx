import css from './SearchInput.module.css';

export const SearchInput = ({handleInput, placeholder, id}: any) => {
	return (
		<input
			className={css.root}
			onChange={handleInput}
			placeholder={placeholder}
			id={id}
		/>
	)
}
