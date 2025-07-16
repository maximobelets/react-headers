import { useEffect } from 'react';

export const useOutsideClick = (ref: React.MutableRefObject<HTMLDivElement>, func: () => void) => {
    const handleClickOutside = (event: MouseEvent): void => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            func();
        }
    };
  
    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

    return () => {
        document.removeEventListener('click', handleClickOutside)
    };
  }, [ref]);
};