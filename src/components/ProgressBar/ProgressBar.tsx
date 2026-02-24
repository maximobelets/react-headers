import s from './ProgressBar.module.css';

type ProgressBarProps = {
    value: number;
}

export const ProgressBar = ({ value }: ProgressBarProps) => {
    const correctValue: number = Math.min(100, Math.max(0, value));

    return (
        <div className={s.root}>
            <div
                className={s.bar}
                style={{ width: `${correctValue}%` }}
            />
        </div>
    )
}
