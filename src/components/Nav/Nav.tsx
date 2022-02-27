import {NavLink} from "react-router-dom";
import s from './Nav.module.css';

export const Nav = () => {
	return (
		<nav className={s.root}>
			<NavLink to='/' exact className={s.link}>
				Main
			</NavLink>
			<NavLink to='/button' exact className={s.link}>
				Button
			</NavLink>
			<NavLink to='/dropdown' exact className={s.link}>
				Dropdown
			</NavLink>
			<NavLink to='/header' exact className={s.link}>
				Header
			</NavLink>
			<NavLink to='/search-bar' exact className={s.link}>
				Search Bar
			</NavLink>
			<NavLink to='/form' exact className={s.link}>
				Form
			</NavLink>
			<NavLink to='/multiselect' exact className={s.link}>
				Multiselect
			</NavLink>
		</nav>
	);
};
