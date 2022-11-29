import {ComponentStory, Meta} from '@storybook/react';
import React from 'react';

import {Line} from '../line';

export default {
    title: 'Components/Line',
    id: 'components/Line',
    component: Line,
    argTypes: {
        content: {
            control: {type: 'text'},
            defaultValue: 'Line',
        },
        color: {
            options: ['base', 'primary', 'success', 'error'],
            control: {type: 'select'},
            defaultValue: 'primary',
        },
        size: {
            options: ['s', 'm', 'l'],
            control: {type: 'radio'},
            defaultValue: 'm',
        },
        width: {
            options: [undefined, 'auto', 'max'],
            control: {type: 'radio'},
            defaultValue: undefined,
        },
    },
} as Meta;

export const Template: ComponentStory<typeof Line> = (args) => {
    return (
        <>
            <Line {...args} />
        </>
    );
};
