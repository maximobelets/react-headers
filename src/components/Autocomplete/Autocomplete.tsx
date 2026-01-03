import { useEffect, useRef, useState } from "react";

import { SearchInput } from "../../componentBlocks/SearchInput";
import { SearchList } from "../../componentBlocks/SearchList";

import { useOutsideClick } from "../../hooks/hooks";
import { ISearchListItem } from "../../types/types";

import s from './Autocomplete.module.css';

export const Autocomplete = () => {
	const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState(data)
	const [isActive, setIsActive] = useState(false);

	const ref: React.MutableRefObject<HTMLDivElement> = useRef(null);

	useOutsideClick(ref, () => setIsActive(false))

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(response => {setData(response); setFilterData(response)})
			.catch(error => console.log(error))
	}, []);

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.currentTarget;
		const filterArray = data.filter((el: ISearchListItem) => el.name.toLowerCase().includes(value));

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
		<div className={s.root} ref={ref}>
			<SearchInput handleInput={handleInput} />
			<SearchList data={data} isActive={isActive} />
		</div>
	)
}
