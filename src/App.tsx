import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Button } from './components/Button';
import { Dropdown } from './components/Dropdown';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Autocomplete } from './components/Autocomplete';
import { Form } from './components/Form';
import { Multiselect } from './components/Multiselect';
import { Select } from './components/Select';
import { Main } from './components/Main';

import { navConfig } from './utils/configs';
import { testArray } from './constants/constants';

import 'normalize.css';

import s from './App.module.css';

const App = () => {
	return (
		<Router>
			<div className={s.root}>
				<div className={s.nav}>
					<h1 className={s.title}>
						React Components Project
					</h1>
					<Nav links={navConfig} />
				</div>
				<section className={s.content}>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/button' element={<Button />} />
						<Route path='/dropdown' element={<Dropdown list={testArray} />} />
						<Route path='/header' element={<Header />} />
						<Route path='/autocomplete' element={<Autocomplete />} />
						<Route path='/form' element={<Form />} />
						<Route path='/multiselect' element={<Multiselect list={testArray} />} />
						<Route path='/select' element={<Select list={testArray} />} />
					</Routes>
				</section>
			</div>
		</Router>
	);
};

export default App;
