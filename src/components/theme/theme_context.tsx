import * as React from 'react';
import {TypeTheme} from './types';

export interface TypeThemeContext {
    theme: TypeTheme;
    setTheme: (newTheme: TypeTheme) => void;
}

export const ThemeContext = React.createContext<TypeThemeContext>({} as TypeThemeContext);
ThemeContext.displayName = 'ThemeContext';
