import { useRef, useState } from 'react';

import { SelectItem } from '../../componentBlocks/SelectItem';

import { TestArray } from '../../types/types';

import { useOutsideClick } from '../../hooks/hooks';

import s from './Multiselect.module.css';

interface MultiselectProps {
	list?: Array<TestArray>,
};

export const Multiselect = ({ list }: MultiselectProps) => {
	const [isActive, setActive] = useState(false);
	const [selectedElements, setSelectedElements] = useState<string[]>([]);

	const clickInput = () => {
		setActive(!isActive);
	}

	const elementListClick = (name: string) => {
		setSelectedElements(prevState =>
			prevState.includes(name)
				? prevState.filter(item => item !== name)
				: [...prevState, name]
		);
	}

	const deleteItem = (selectedItem: string) => setSelectedElements(selectedElements.filter(item => item !== selectedItem));

	const ref = useRef<HTMLDivElement>(null);

	useOutsideClick(ref, (): void => setActive(false))

	return (
		<div className={s.root} ref={ref}>
			<div 
				className={s.value}
				onClick={clickInput}
			>
				{selectedElements.map((element) => {
					return (
						<SelectItem name={element} onClick={deleteItem} key={element} />
					)
				})}
			</div>
			{isActive && (
				<ul className={s.list}>
					{list?.map((element: TestArray) => 
						<li
							className={`${s.element} ${selectedElements.includes(element.name) && s.selected}`}
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
