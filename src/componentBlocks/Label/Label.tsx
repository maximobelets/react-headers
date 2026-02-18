import { LabelHTMLAttributes } from 'react';

import s from './Label.module.css';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ ...props }: LabelProps) => {
	return (
		<label className={s.root} {...props} />
	)
}