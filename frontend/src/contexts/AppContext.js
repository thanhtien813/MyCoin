import { createContext } from 'react';

export const AppContext = createContext({
    isAccessed: false,
    setIsAccessed: (value) => {}
});