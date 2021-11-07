import { Label } from "../../componentBlocks/Label";
import { SearchInput } from "../../componentBlocks/SearchInput";
import { Wrapper } from "../../componentBlocks/Wrapper"

import s from './Form.module.css';

export const Form = () => {
	return (
		<Wrapper>
			<div className={s.root}>
				<Label htmlFor='first'>
					Label
				</Label>
				<SearchInput placeholder={'First value'} id='first'/>
				<SearchInput placeholder={'Second value'} />
			</div>
		</Wrapper>
	)
}
