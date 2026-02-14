import s from './Header.module.css';

interface HeaderProps {
	title?: string,
	backgroundColor?: string,
	color?: string,
	children?: React.ReactNode,
};

export const Header = ({
		title = 'Title',
		backgroundColor = 'gray',
		color = '#000',
		children = 'Text'
	}: HeaderProps ) => {

	return (
		<header className={s.root} style={{backgroundColor}}>
			<h1 className={s.title} style={{color}}>
				{title}
			</h1>
			{children}
		</header>
	)
}
