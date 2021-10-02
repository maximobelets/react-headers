import {NavLink} from "react-router-dom";
import s from './Nav.module.css';

export const Nav = () => {
	return (
		<>
			<NavLink to='/' exact>
				Main
			</NavLink>
			<NavLink to='/button' exact>
				Button
			</NavLink>
			<NavLink to='/dropdown' exact>
				Dropdown
			</NavLink>
			<NavLink to='/header' exact>
				Header
			</NavLink>
		</>
	);
};
