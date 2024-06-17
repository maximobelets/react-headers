import { useEffect, useState } from "react";

import { SearchInput } from "../../componentBlocks/SearchInput";
import { SearchList } from "../../componentBlocks/SearchList";
import { Wrapper } from "../../componentBlocks/Wrapper";

import s from './SearchBar.module.css';

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
		<Wrapper>
			<div className={s.root}>
				<SearchInput handleInput={handleInput} />
				<SearchList data={data} isActive={isActive} />
			</div>
		</Wrapper>
	)
}
