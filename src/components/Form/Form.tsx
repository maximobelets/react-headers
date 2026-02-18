import { SyntheticEvent, useState } from "react";

import { Label } from "../../componentBlocks/Label";
import { SearchInput } from "../../componentBlocks/SearchInput";
import { Button } from "../Button";

import s from './Form.module.css';

export const Form = () => {
	const [name, setName] = useState('');
	const [secondName, setSecondName] = useState('');

	const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
		return setName(e.target.value)
	}

	const handleSecondName = (e: React.ChangeEvent<HTMLInputElement>) => {
		return setSecondName(e.target.value)
	}

	const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form className={s.root} onSubmit={handleSubmit}>
			<Label>
				Name
				<SearchInput
					placeholder={'First value'}
					type='text'
					onChange={handleName}
					name='firstName'
					value={name}
				/>
			</Label>
			<Label>
				Second Name
				<SearchInput
					placeholder={'Second value'}
					type='text'
					onChange={handleSecondName}
					name='secondName'
					value={secondName}
				/>
			</Label>
			<Button
				type="submit"
				children="Submit"
			/>
		</form>
	)
}
