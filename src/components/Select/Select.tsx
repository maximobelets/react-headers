import { useState } from "react";

import { TestArray } from "../../types/types";

import s from './Select.module.css';

interface SelectProps {
	list?: TestArray[]
}

export const Select = ({ list = [] }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeValue, setActiveValue] = useState('');

	const handleSelect = () => {
		setIsOpen(prevState => !prevState)
	}

	const changeValue = (data: string): void => {
		setActiveValue(data)
		setIsOpen(prevState => !prevState)
	}

	return (
		<div className={s.root}>
			<input
				value={activeValue}
				onClick={handleSelect}
				className={s.input}
				readOnly
			/>
			{isOpen && (
				<ul className={s.list}>
					{list?.map((item) =>
						<li
							onClick={(): void => changeValue(item.name)}
							className={s.element}
							key={item.name}
						>
							{item.name}
						</li>
					)}
				</ul>
			)}
		</div>
	)
}
