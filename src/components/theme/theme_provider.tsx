import React, {PropsWithChildren, useEffect, useLayoutEffect, useState} from 'react';
import {TypeTheme} from './types';
import {ThemeContext} from './theme_context';
import {updateBodyClass} from './utils';

export interface PropsThemeProvider extends PropsWithChildren {
    theme: TypeTheme;
}

export function ThemeProvider({theme: newTheme, children}: PropsThemeProvider) {
    const [theme, setTheme] = useState<TypeTheme>(newTheme);

    useLayoutEffect(() => {
        setTheme(() => newTheme);
    }, [newTheme]);

    useEffect(() => {
        updateBodyClass(newTheme);
    }, [newTheme]);

    const contextValues = {
        theme,
        setTheme,
    };

    return <ThemeContext.Provider value={contextValues}>{children}</ThemeContext.Provider>;
}
