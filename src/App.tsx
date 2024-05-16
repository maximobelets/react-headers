import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'normalize.css';

import { Button } from './components/Button';
import { Dropdown } from './components/Dropdown';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { SearchBar } from './components/SearchBar';
import { Form } from './components/Form';
import { Multiselect } from './components/Multiselect';

import s from './App.module.css';
import { Path } from './types/types';

const App: React.FC = () => {
	const navConfig: Path[] = [
		{
			path: '/',
			exact: true,
			title: 'Main',
		},
		{
			path: '/button',
			exact: true,
			title: 'Button',
		},
		{
			path: '/dropdown',
			exact: true,
			title: 'Dropdown',
		},
		{
			path: '/header',
			exact: true,
			title: 'Header',
		},
		{
			path: '/search-bar',
			exact: true,
			title: 'Search Bar',
		},
		{
			path: '/form',
			exact: true,
			title: 'Form',
		},
		{
			path: '/multiselect',
			exact: true,
			title: 'Multiselect',
		},
	];

	return (
		<Router>
			<Nav links={navConfig} />
			<section className={s.root}>
				<div>
					<h1 className={s.title}>
						React Components Project
					</h1>
				</div>
			</section>
			<Switch>
				<Route path='/button' component={Button} exact />
				<Route path='/dropdown' component={Dropdown} exact />
				<Route path='/header' component={Header} exact />
				<Route path='/search-bar' component={SearchBar} exact />
				<Route path='/form' component={Form} exact />
				<Route path='/multiselect' component={Multiselect} exact />
			</Switch>
		</Router>
	);
};

export default App;
