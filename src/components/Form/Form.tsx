import { Label } from "../../componentBlocks/Label";
import { SearchInput } from "../../componentBlocks/SearchInput";
import { Wrapper } from "../../componentBlocks/Wrapper"

import s from './Form.module.css';

export const Form = () => {
	const handleSubmit = (event: any) => {
		console.log('Form Submitted')
		event.preventDefault();
	};

	return (
		<Wrapper>
			<form className={s.root} onSubmit={handleSubmit}>
				<Label>
					Label
					<SearchInput placeholder={'First value'} type='text'/>
				</Label>
				<Label>
					Label
					<SearchInput placeholder={'Second value'} type='text'/>
				</Label>
			</form>
		</Wrapper>
	)
}
