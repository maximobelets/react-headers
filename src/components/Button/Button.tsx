import { Wrapper } from '../../componentBlocks/Wrapper';
import s from './Button.module.css';

export const Button = () => {
	return (
		<Wrapper>
			<button className={s.root}>
				Click Me!
			</button>
		</Wrapper>
	)
};
