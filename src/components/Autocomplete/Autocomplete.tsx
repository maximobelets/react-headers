import { useEffect, useRef, useState } from "react";

import { SearchInput } from "../../componentBlocks/SearchInput";
import { SearchList } from "../../componentBlocks/SearchList";

import { useOutsideClick } from "../../hooks/hooks";

import s from './Autocomplete.module.css';

export const Autocomplete = () => {
	const [data, setData] = useState([]);
	const [filterData, setFilterData] = useState(data)
	const [isActive, setIsActive] = useState(false);
	const [currentValue, setCurrentValue] = useState('');

	const ref: React.MutableRefObject<HTMLDivElement> = useRef(null);

	useOutsideClick(ref, () => setIsActive(false))

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(response => {
				setData(response.map((user => user.name)));
				setFilterData(response.map((user => user.name)));
			})
			.catch(error => console.log(error))
	}, []);

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget;
		const filterArray = data.filter((el: string) => el.toLowerCase().includes(value));

		setData(filterArray);
		setIsActive(true);
		setCurrentValue(value)

		if (value === '') {
			setData(filterData)
			setIsActive(false)
		}

		if (!filterArray.length) {
			setIsActive(false)
		}
	};

	const handleItemClick = (item) => {
		setCurrentValue(item)
	}

	return (
		<div className={s.root} ref={ref}>
			<SearchInput handleInput={handleInput} value={currentValue} />
			<SearchList data={data} isActive={isActive} onClick={handleItemClick} />
		</div>
	)
}
