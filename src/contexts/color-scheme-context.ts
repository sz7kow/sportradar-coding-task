import {createContext, useContext} from 'react';

interface ContextValue {
  prefersDarkScheme?: boolean;
  toggleColorScheme: () => void;
}

export const colorSchemeContext = createContext<ContextValue>({
  prefersDarkScheme: false,
  toggleColorScheme: () => {},
});

export const useColorSchemeContext = () => useContext(colorSchemeContext);
