import { useState } from "react";

import { Wrapper } from "../../componentBlocks/Wrapper";

import s from './Select.module.css';

export const Select = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Wrapper>
			<div className={s.root}>
                Select
			</div>
		</Wrapper>
	)
}
