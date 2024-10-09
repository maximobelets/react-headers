import { useEffect } from 'react';

export const useOutsideClick = (ref, func) => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
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