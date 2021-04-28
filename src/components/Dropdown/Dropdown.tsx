import { useState } from 'react';
import s from './Dropdown.module.css';

export const Dropdown = ({array}: any) => {
	const [isActive, setActive] = useState(false);

	return (
		<div className={s.root} onClick={() => setActive(prevState => !prevState)}>
			Dropdown
			{isActive ? (
				<ul className={s.list}>
					{array.map((el: string) => 
						<li className={s.el}>
							{el}
						</li>
					)}
				</ul>
			) : null}
		</div>
	);
};