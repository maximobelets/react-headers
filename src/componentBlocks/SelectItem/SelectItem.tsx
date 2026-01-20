import { ISelectItem } from '../../types/types';

import crossIcon from '../../components/Nav/assets/cross.svg';

import s from './SelectItem.module.css';

export const SelectItem = ({ name, onClick }: ISelectItem) => {
	return (
		<span className={s.root} onClick={() => onClick(name)} key={name}>
			{name}
            <img
				src={crossIcon}
				// alt={!mobileMenu ? 'Icon for open mobile menu' : 'Icon for close mobile menu'}
				className={s.closeIcon}
				// onClick={handleMobileMenu}
			/>
		</span>
	)
}
