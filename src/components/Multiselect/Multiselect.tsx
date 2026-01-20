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

	const elementListClick = (data: string) => {
		setActive(!isActive);

		setSelectedElements([...selectedElements, data]);

		if (selectedElements.includes(data)) {
			setSelectedElements([...selectedElements.filter(element => element !== data)])
		}
	}

	const deleteItem = (selectedItem) => setSelectedElements(selectedElements.filter(item => item !== selectedItem));

	const ref: React.MutableRefObject<HTMLDivElement> = useRef(null);

	useOutsideClick(ref, (): void => setActive(false))

	return (
		<div className={s.root} ref={ref}>
			<div 
				className={s.value}
				onClick={clickInput}
			>
				{selectedElements.map((element) => {
					return (
						<SelectItem name={element} onClick={deleteItem} />
					)
				})}
			</div>
			{isActive && (
				<ul className={s.list}>
					{list?.map((element: TestArray) => 
						<li
							className={`${s.el} ${selectedElements.includes(element.name) && s.selected}`}
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
