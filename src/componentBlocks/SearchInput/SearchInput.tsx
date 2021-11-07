import css from './SearchInput.module.css';

interface SearchInputProps {
	handleInput?: any;
	placeholder?: string;
	id?: string;
}

export const SearchInput = ({handleInput, placeholder, id}: SearchInputProps) => {
	return (
		<input
			className={css.root}
			onChange={handleInput}
			placeholder={placeholder}
			id={id}
		/>
	)
}
