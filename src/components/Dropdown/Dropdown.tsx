import { useState } from 'react';
import { TestArray } from '../../types/types';
import s from './Dropdown.module.css';

interface IProps {
	list: Array<TestArray>,
};

export const Dropdown = ({list}: IProps) => {
	const [newList, setNewList] = useState(list);
	const [isActive, setActive] = useState(false);
	const [placeholder, setPlaceholder] = useState('Dropdown');
	const [inputValue, setInputValue] = useState('');
	const [selectedElements, setSelectedElements] = useState<string[]>([]);

	const handleInput = (event: any) => {
		const {value} = event.currentTarget;
		setInputValue(value);
		setNewList(list.filter(el => el.name.includes(value)));
	};

	const elementListClick = (data: any) => {
		setPlaceholder(data);
		setInputValue(data);
		setSelectedElements([...selectedElements, data]);

		if (selectedElements.includes(data)) {
			setSelectedElements([...selectedElements.filter(el => el !== data)])
		}
	}

	console.log(selectedElements);

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
					{newList.map((el: TestArray) => 
						<li
							className={`${s.el} ${selectedElements.includes(el.name) ? s.selected : ''}`}
							onClick={(e) => elementListClick(el.name)} key={el.name}
						>
							{el.name}
						</li>
					)}
				</ul>
			) : null}
		</>
	);
};