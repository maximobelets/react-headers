import { SyntheticEvent, useRef, useState } from 'react';

import { TestArray } from '../../types/types';
import { Wrapper } from '../../componentBlocks/Wrapper';

import { useOutsideClick } from '../../hooks/hooks';

import s from './Dropdown.module.css';

interface DropdownProps {
	list?: Array<TestArray>,
};

export const Dropdown = ({list}: DropdownProps) => {
	const [newList, setNewList] = useState(list);
	const [isActive, setActive] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [selectedElements, setSelectedElements] = useState<string[]>([]);

	const handleInput = (event: SyntheticEvent<HTMLInputElement>) => {
		const {value} = event.currentTarget;

		setInputValue(value);
		setNewList(newList?.filter(el => el.name.includes(value)));
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

	const ref = useRef(null);

	useOutsideClick(ref, () => setActive(false))

	return (
		<Wrapper>
			<div className={s.root} ref={ref}>
				<input 
					className={s.input}
					value={inputValue}
					onClick={clickInput}
					onChange={handleInput}
					placeholder="Dropdown"
				/>
				{isActive && (
					<ul className={s.list}>
						{newList?.map((element: TestArray) => 
							<li
								className={`${s.el} ${selectedElements.includes(element.name) ? s.selected : ''}`}
								onClick={() => elementListClick(element.name)} key={element.name}
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
