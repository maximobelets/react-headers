import css from './SearchInput.module.css';

interface SearchInputProps {
	handleInput?: any;
	placeholder?: string;
	id?: string;
	type?: string;
	name?: string;
	value?: string | number;
}

export const SearchInput = ({handleInput, placeholder, id, type, name, value}: SearchInputProps) => {
	return (
		<input
			className={css.root}
			onChange={handleInput}
			placeholder={placeholder}
			id={id}
			type={type}
			name={name}
			value={value}
		/>
	)
}
