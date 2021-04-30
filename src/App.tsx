import React from 'react';

import s from './App.module.css';
import { Button } from './components/Button';
import { Dropdown } from './components/Dropdown';
import { Header } from './components/Header';

const testArray: Array<string> = ['One', 'Two'];

const App: React.FC = () => {
	return (
		<section className={s.root}>
			<div>
				<h1 className={s.title}>
					React Components Project
				</h1>
			</div>
			<Header title={'Test Title'} backgroundColor={'#4A5758'} color={'#fff'} />
			<Button />
			<Dropdown list={testArray} />
		</section>
	);
};

export default App;
