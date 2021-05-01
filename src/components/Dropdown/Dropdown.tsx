import { useState } from 'react';
import { TestArray } from '../../types/types';
import s from './Dropdown.module.css';

interface IProps {
	list: Array<TestArray>,
};

export const Dropdown = ({list}: IProps) => {
	const [isActive, setActive] = useState(false);
	const [placeholder, setPlaceholder] = useState('Dropdown');

	return (
		<div className={s.root} onClick={() => setActive(!isActive)}>
			{placeholder}
			{isActive ? (
				<ul className={s.list}>
					{list.map((el: TestArray) => 
						<li className={s.el} onClick={() => setPlaceholder(el.name)}>
							{el.name}
						</li>
					)}
				</ul>
			) : null}
		</div>
	);
};