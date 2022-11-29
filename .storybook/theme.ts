import {create} from '@storybook/theming';

export const CloudThemeLight = create({
    base: 'light',

    colorPrimary: '#027bf3',
    colorSecondary: 'rgba(2, 123, 243, 0.6)',
});

export const CloudThemeDark = create({
    base: 'dark',
});

export const themes = {
    light: CloudThemeLight,
    dark: CloudThemeDark,
};
