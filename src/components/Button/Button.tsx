import { ButtonHTMLAttributes } from 'react';

import s from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'standard' | 'outline' | 'cancel';
}

export const Button = ({ variant = 'standard', className, ...props }: ButtonProps) => {
	return (
		<button
			className={`${s.root} ${s[variant]} ${className}`} 
			{...props}
		/>
	)
};
