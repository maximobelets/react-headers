import s from './Spinner.module.css';

type SpinnerProps = {
    size?: number;
}

export const Spinner = ({ size = 40 }: SpinnerProps) => {
    return (
        <div
            className={s.root}
            style={{
                width: size,
                height: size,
            }}
        />
    )
}
