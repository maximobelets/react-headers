import { SyntheticEvent, useState } from 'react';
import { TestArray } from '../../types/types';
import s from './Dropdown.module.css';

import {testArray} from '../../constants/constants';
import { Wrapper } from '../../componentBlocks/Wrapper';

interface IProps {
	list: Array<TestArray>,
};

export const Dropdown = ({list}: IProps) => {
	const [newList, setNewList] = useState(testArray);
	const [isActive, setActive] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [selectedElements, setSelectedElements] = useState<string[]>([]);

	const handleInput = (event: SyntheticEvent<HTMLInputElement>) => {
		const {value} = event.currentTarget;

		setInputValue(value);
		setNewList(newList.filter(el => el.name.includes(value)));
	};

	const clickInput = () => {
		setActive(!isActive);

		if (isActive) {
			setInputValue('')
		}
	}

	const elementListClick = (data: any) => {
		setInputValue(data);
		setSelectedElements([...selectedElements, data]);

		if (selectedElements.includes(data)) {
			setSelectedElements([...selectedElements.filter(element => element !== data)])
		}
	}

	return (
		<Wrapper>
			<div className={s.root}>
				<input 
					className={s.input}
					value={inputValue}
					onClick={clickInput}
					onChange={handleInput}
					placeholder="Dropdown"
				/>
				{isActive && (
					<ul className={s.list}>
						{newList.map((element: TestArray) => 
							<li
								className={`${s.el} ${selectedElements.includes(element.name) ? s.selected : ''}`}
								onClick={(e) => elementListClick(element.name)} key={element.name}
							>
								{element.name}
							</li>
						)}
					</ul>
				)}
			</div>
		</Wrapper>
	);
};
