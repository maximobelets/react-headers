import { useEffect, useState } from "react";
import { SearchInput } from "../../componentBlocks/SearchInput";
import { SearchList } from "../../componentBlocks/SearchList";

import css from './SearchBar.module.css';

export const SearchBar = () => {
	const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState(data)
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(response => {setData(response); setFilterData(response)})
			.catch(error => console.log(error))
	}, []);

	console.log(data)

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.currentTarget;
		const filterArray = data.filter((el: any) => el.name.toLowerCase().includes(value));

		setData(filterArray);
		setIsActive(true);

		if (value === '') {
			setData(filterData)
			setIsActive(false)
		}

		if (!filterArray.length) {
			setIsActive(false)
		}
	};

	return (
		<div className={css.root}>
			<SearchInput handleInput={handleInput} />
			<SearchList data={data} isActive={isActive} />
		</div>
	)
}
