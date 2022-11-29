import {ComponentStory, Meta} from '@storybook/react';
import React from 'react';

import Docs from './button.docs.mdx';

import {CircleLoader} from '..';

export default {
    title: 'Components/Loaders',
    id: 'components/Loaders',
    component: CircleLoader,
    argTypes: {
        size: {
            options: ['s', 'm', 'l', 'x'],
            control: {type: 'select'},
            defaultValue: 's',
        },
    },
    parameters: {
        docs: {
            page: Docs,
        },
    },
} as Meta;

export const Template: ComponentStory<typeof CircleLoader> = (args) => {
    return (
        <>
            <div style={{marginTop: '15px'}}></div>
            <CircleLoader {...args} />
            <div style={{marginTop: '15px'}}></div>
        </>
    );
};
