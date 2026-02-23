import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";

import { Path } from "../../types/types";

import menuIcon from './assets/menu.svg';
import crossIcon from './assets/cross.svg';

import s from './Nav.module.css';

interface NavProps {
	links: Path[];
}

export const Nav = ({ links }: NavProps) => {
	const { pathname } = useLocation();

	const [mobileMenu, setMobileMenu] = useState(false);

	const handleMobileMenu = () => setMobileMenu(prevState => !prevState);

	useEffect(() => {
		setMobileMenu(false);
	}, [pathname])

	return (
		<nav className={cn(s.root, mobileMenu && s.mobileNav  )}>
			<ul className={cn(s.list, mobileMenu && s.listMobile)}>
				{links.map((link) => (
					<li className={s.item} key={link.path}>
						<NavLink
							to={link.path}
							className={s.link}
							onClick={(): void => mobileMenu && handleMobileMenu()}
						>
							{link.title}
						</NavLink>
					</li>
				))}
			</ul>
			<img
				src={!mobileMenu ? menuIcon : crossIcon}
				alt={!mobileMenu ? 'Icon for open mobile menu' : 'Icon for close mobile menu'}
				className={s.mobileMenu}
				onClick={handleMobileMenu}
			/>
		</nav>
	);
};
