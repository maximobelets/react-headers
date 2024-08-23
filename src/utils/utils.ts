export const debounce = (callback: () => void, delay: number) => {
    let timeoutId: any;

    return (...args: any) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}