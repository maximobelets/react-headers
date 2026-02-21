import { ISelectItem } from '../../types/types';

import crossIcon from '../../components/Nav/assets/cross.svg';

import s from './SelectItem.module.css';

export const SelectItem = ({ name, onClick }: ISelectItem) => {
	const handleClick = () => onClick(name);

	return (
		<span className={s.root}>
			{name}
            <img
				src={crossIcon}
				alt={'Icon for open delete select item'}
				className={s.icon}
				onClick={handleClick}
			/>
		</span>
	)
}
