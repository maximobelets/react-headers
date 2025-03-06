import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Button } from './components/Button';
import { Dropdown } from './components/Dropdown';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Autocomplete } from './components/Autocomplete';
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
			<div className={s.root}>
				<Nav links={navConfig} />
				<section className={s.content}>
					<div>
						<h1 className={s.title}>
							React Components Project
						</h1>
					</div>
					<Routes>
						<Route path='/button' element={<Button />} />
						<Route path='/dropdown' element={<Dropdown list={testArray} />} />
						<Route path='/header' element={<Header />} />
						<Route path='/autocomplete' element={<Autocomplete />} />
						<Route path='/form' element={<Form />} />
						<Route path='/multiselect' element={<Multiselect />} />
						<Route path='/select' element={<Select list={testArray} />} />
					</Routes>
				</section>
			</div>
		</Router>
	);
};

export default App;
