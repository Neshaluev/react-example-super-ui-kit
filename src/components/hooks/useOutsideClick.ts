import {useEffect, useCallback, useRef} from 'react';

export const useOutsideClick = (onClick: () => void) => {
    const ref = useRef<HTMLElement | null>(null);

    const handleClick = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (e: any) => {
            if (!ref.current) {
                return null;
            }
            const inside = ref.current.contains(e.target);
            if (inside) {
                return null;
            }

            onClick();

            return null;
        },
        [onClick, ref],
    );

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, [handleClick]);

    return ref;
};

export default useOutsideClick;
