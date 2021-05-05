import { useState } from 'react';
import { TestArray } from '../../types/types';
import s from './Dropdown.module.css';

interface IProps {
	list: Array<TestArray>,
};

export const Dropdown = ({list}: IProps) => {
	const [isActive, setActive] = useState(false);
	const [placeholder, setPlaceholder] = useState('Dropdown');
	const [inputValue, setInputValue] = useState('');

	const handleInput = (event: any) => {
		const {value} = event.currentTarget;
		setInputValue(value);
	};

	const elementListClick = (data: any) => {
		setPlaceholder(data);
		setInputValue(data);
	}

	console.log(inputValue)

	return (
		<>
			<input 
				className={s.root}
				value={inputValue}
				onClick={() => setActive(!isActive)}
				onChange={handleInput}
				placeholder={placeholder}
			/>
			{isActive ? (
				<ul className={s.list}>
					{list.map((el: TestArray) => 
						<li className={s.el} onClick={() => elementListClick(el.name)}>
							{el.name}
						</li>
					)}
				</ul>
			) : null}
		</>
	);
};