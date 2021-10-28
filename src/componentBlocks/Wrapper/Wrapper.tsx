import s from './Wrapper.module.css';

export const Wrapper = ({children}: any) => {
	return (
		<div className={s.root}>
			{children}
		</div>
	)
}
