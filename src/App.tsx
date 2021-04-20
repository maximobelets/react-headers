import React from 'react';

import s from './App.module.css';
import { Header } from './components/Header';

const App: React.FC = () => {
	return (
		<>
			<div className={s.root}>
				<h1 className={s.title}>
					React Headers Project
				</h1>
			</div>
			<Header title={'Test Title'} backgroundColor={'#4A5758'} color={'#fff'} />
		</>
	);
};

export default App;
