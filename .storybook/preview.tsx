import '../styles/globals.scss';

import {DecoratorFn} from '@storybook/react';
import React from 'react';
import {ThemeProvider} from '../src/components/theme/theme_provider';

const withContextProvider: DecoratorFn = (Story, context) => {
    return (
        <ThemeProvider theme={context.globals.theme}>
            <Story {...context} />
        </ThemeProvider>
    );
};

export const decorators = [withContextProvider];

// Global paramters
export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: ['Components', 'Intro', 'Pages', ['Home', 'Login', 'Admin']],
        },
    },
    // backgrounds: {
    //     values: [
    //         {name: 'darki', value: 'rgb(39, 39, 39)'},
    //         {name: 'white', value: '#fff'},
    //     ],
    // },
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        defaultValue: 'light',
        toolbar: {
            icon: 'mirror',
            items: [
                {value: 'light', right: '☼', title: 'Light'},
                {value: 'dark', right: '☾', title: 'Dark'},
            ],
        },
    },
    platform: {
        name: 'Platform',
        defaultValue: 'desktop',
        toolbar: {
            items: [
                {value: 'desktop', title: 'Desktop', icon: 'browser'},
                {value: 'mobile', title: 'Mobile', icon: 'mobile'},
            ],
        },
    },
};
