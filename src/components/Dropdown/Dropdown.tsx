import { useRef, useState } from 'react';

import { TestArray } from '../../types/types';

import { useOutsideClick } from '../../hooks/hooks';

import s from './Dropdown.module.css';

interface DropdownProps {
	list?: Array<TestArray>,
};

export const Dropdown = ({ list }: DropdownProps) => {
	const [isActive, setActive] = useState(false);
	const [value, setValue] = useState('');

	const clickInput = () => {
		setActive(!isActive);
	}

	const elementListClick = (data: string) => {
		setValue(data);
		setActive(!isActive);
	}

	const ref: React.RefObject<HTMLDivElement> = useRef(null);

	useOutsideClick(ref, (): void => setActive(false))

	return (
		<div className={s.root} ref={ref}>
			<div 
				className={s.value}
				onClick={clickInput}
			>
				{value}
			</div>
			{isActive && (
				<ul className={s.list}>
					{list?.map((element: TestArray) => 
						<li
							className={`${s.element} 
								${element.name === value && s.selected}`}
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
