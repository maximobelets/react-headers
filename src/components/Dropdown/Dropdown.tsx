import { SyntheticEvent, useRef, useState } from 'react';

import { TestArray } from '../../types/types';

import { useOutsideClick } from '../../hooks/hooks';

import s from './Dropdown.module.css';

interface DropdownProps {
	list?: Array<TestArray>,
	multiselect?: boolean,
};

export const Dropdown = ({ list, multiselect }: DropdownProps) => {
	const [isActive, setActive] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [selectedElements, setSelectedElements] = useState<string[]>([]);

	const handleInput = (event: SyntheticEvent<HTMLInputElement>) => {
		const {value} = event.currentTarget;

		setInputValue(value);
	};

	const clickInput = () => {
		setActive(!isActive);

		if (isActive) {
			setInputValue('')
		}
	}

	const elementListClick = (data: string) => {
		setInputValue(data);
		setActive(!isActive);

		if (multiselect) {
			setSelectedElements([...selectedElements, data]);

			if (selectedElements.includes(data)) {
				setSelectedElements([...selectedElements.filter(element => element !== data)])
			}
		}
	}

	const ref: React.MutableRefObject<HTMLDivElement> = useRef(null);

	useOutsideClick(ref, (): void => setActive(false))

	return (
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
					{list?.map((element: TestArray) => 
						<li
							className={`${s.el} 
								${selectedElements.includes(element.name) || element.name === inputValue 
								? s.selected : ''}`}
							onClick={() => elementListClick(element.name)}
							key={element.name}
						>
							{element.name}
						</li>
					)}
				</ul>
			)}
		</div>
	);
};
