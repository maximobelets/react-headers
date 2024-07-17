import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Button } from './components/Button';
import { Dropdown } from './components/Dropdown';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { SearchBar } from './components/SearchBar';
import { Form } from './components/Form';
import { Multiselect } from './components/Multiselect';
import { Select } from './components/Select';

import { navConfig } from './utils/configs';
import { testArray } from './constants/constants';

import 'normalize.css';

import s from './App.module.css';

const App = () => {
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
			<Routes>
				<Route path='/button' element={<Button />} />
				<Route path='/dropdown' element={<Dropdown />} />
				<Route path='/header' element={<Header />} />
				<Route path='/search-bar' element={<SearchBar />} />
				<Route path='/form' element={<Form />} />
				<Route path='/multiselect' element={<Multiselect />} />
				<Route path='/select' element={<Select list={testArray} />} />
			</Routes>
		</Router>
	);
};

export default App;
