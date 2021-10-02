import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import 'normalize.css';

import s from './App.module.css';
import { Button } from './components/Button';
import { Dropdown } from './components/Dropdown';
import { Header } from './components/Header';

const App: React.FC = () => {
	return (
		<Router>
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
			<section className={s.root}>
				<div>
					<h1 className={s.title}>
						React Components Project
					</h1>
				</div>
			</section>
			<Switch>
				<Route path='/button' component={Button} exact></Route>
				<Route path='/dropdown' component={Dropdown} exact/>
				<Route path='/header' component={Header} exact/>
			</Switch>
		</Router>
	);
};

export default App;
