import s from './Wrapper.module.css';

interface WrapperProps {
	children: React.ReactNode;
};

export const Wrapper = ({children}: WrapperProps) => {
	return (
		<div className={s.root}>
			{children}
		</div>
	)
}
