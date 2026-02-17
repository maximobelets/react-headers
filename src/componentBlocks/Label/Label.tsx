import { LabelHTMLAttributes } from 'react';
import s from './Label.module.css';

// interface LabelProps {
// 	htmlFor?: string;
// 	children?: React.ReactNode;
// }

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ ...props }: LabelProps) => {
	return (
		<label className={s.root} {...props} />
	)
}