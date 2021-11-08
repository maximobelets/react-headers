import { Label } from "../../componentBlocks/Label";
import { SearchInput } from "../../componentBlocks/SearchInput";
import { Wrapper } from "../../componentBlocks/Wrapper"

import s from './Form.module.css';

export const Form = () => {
	return (
		<Wrapper>
			<div className={s.root}>
				<Label>
					Label
					<SearchInput placeholder={'First value'} type='text'/>
				</Label>
				<Label>
					Label
					<SearchInput placeholder={'Second value'} type='text'/>
				</Label>
			</div>
		</Wrapper>
	)
}
