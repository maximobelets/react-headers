import { InputHTMLAttributes } from 'react';

import s from './SearchInput.module.css';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export const SearchInput = ({ ...props }: SearchInputProps) => {
	return (
		<input
			className={s.root}
			{...props}
		/>
	)
}
