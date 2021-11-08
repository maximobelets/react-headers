import css from './SearchInput.module.css';

interface SearchInputProps {
	handleInput?: any;
	placeholder?: string;
	id?: string;
	type?: string;
	name?: string;
}

export const SearchInput = ({handleInput, placeholder, id, type, name}: SearchInputProps) => {
	return (
		<input
			className={css.root}
			onChange={handleInput}
			placeholder={placeholder}
			id={id}
			type={type}
			name={name}
		/>
	)
}
