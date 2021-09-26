import { useState } from 'react';

export default function useDialog() {
    const [isOpen, setIsOpen] = useState(false);
    return {
        isOpen,
        open() {
            setIsOpen(true);
        },
        close() {
            setIsOpen(false);
        },
        toggleDialog() {
            setIsOpen((prev) => !prev);
        },
        setIsOpen,
    };
}
