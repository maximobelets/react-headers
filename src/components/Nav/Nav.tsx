import {NavLink} from "react-router-dom";
import { Path } from "../../types/types";

// import menuIcon from './assets/menu.svg';
// import crossIcon from './assets/cross.svg';

import s from './Nav.module.css';

interface NavProps {
	links: Path[]
}

export const Nav = ({ links }: NavProps) => {
	return (
		<nav className={s.root}>
			{links.map((link: Path) => (
				<NavLink to={link.path} exact={link.exact} className={s.link} key={link.path}>
					{link.title}
				</NavLink>
			))}
		</nav>
	);
};
