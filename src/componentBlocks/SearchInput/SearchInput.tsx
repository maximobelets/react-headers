import s from './SearchInput.module.css';

interface SearchInputProps {
	handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	id?: string;
	type?: string;
	name?: string;
	value?: string | number;
}

export const SearchInput = ({ handleInput, placeholder, id, type, name, value }: SearchInputProps) => {
	return (
		<input
			className={s.root}
			onChange={handleInput}
			placeholder={placeholder}
			id={id}
			type={type}
			name={name}
			value={value}
		/>
	)
}
