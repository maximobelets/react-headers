import { useState } from 'react';

import s from './Toggle.module.css';

export const Toggle = () => {
	const [on, setOn] = useState(false);

	return (
		<div
			className={`${s.root} ${on && s.on}`}
			onClick={() => setOn(!on)}
		>
			<div className={`${s.thumb} ${on && s.thumbAnimation}`} />
		</div>
	)
};
