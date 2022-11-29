import {TypeTheme} from './types';

export function getSystemTheme() {
    if (typeof window === 'object') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
        return 'light';
    }
}

export function updateBodyClass(newTheme: TypeTheme) {
    const BODY_CLASS = `root_theme`;

    const tableTheme = {
        light: 'theme_light',
        dark: 'theme_dark',
    };

    const container = document.body;

    if (!container.classList.contains(BODY_CLASS)) {
        document.body.classList.add(BODY_CLASS);
    }

    Object.values(container.classList).forEach((cls) => {
        if (cls === 'theme_light') {
            container.classList.remove(cls);
        }
        if (cls === 'theme_dark') {
            container.classList.remove(cls);
        }
    });

    container.classList.add(tableTheme[newTheme]);
}
