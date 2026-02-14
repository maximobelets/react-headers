import s from './Button.module.css';

interface ButtonProps {
	children?: React.ReactNode;
	type?: 'submit' | 'reset' | 'button';
	onClick?: () => void;
	variant?: 'standard' | 'outline' | 'cancel'
}

export const Button = ({ children = 'Click Me!', type = 'button', onClick, variant = 'standard' }: ButtonProps) => {
	return (
		<button className={`${s.root} ${s[variant]}`} type={type} onClick={onClick}>
			{children}
		</button>
	)
};
