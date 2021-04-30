import { useState } from 'react';
import s from './Dropdown.module.css';

interface IProps {
	list: Array<string>,
};

export const Dropdown = ({list}: IProps) => {
	const [isActive, setActive] = useState(false);

	return (
		<div className={s.root} onClick={() => setActive(!isActive)}>
			Dropdown
			{isActive ? (
				<ul className={s.list}>
					{list.map((el: string) => 
						<li className={s.el}>
							{el}
						</li>
					)}
				</ul>
			) : null}
		</div>
	);
};