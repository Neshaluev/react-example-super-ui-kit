import {ComponentStory, Meta} from '@storybook/react';
import React from 'react';

import {Text} from '../text';

export default {
    title: 'Components/Text',
    id: 'components/Text',
    component: Text,
    argTypes: {
        content: {
            control: {type: 'text'},
            defaultValue: 'Text',
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
        value: {
            control: {type: 'value'},
            defaultValue: 'test input',
        },
        width: {
            options: [undefined, 'auto', 'max'],
            control: {type: 'radio'},
            defaultValue: undefined,
        },
    },
} as Meta;

export const Template: ComponentStory<typeof Text> = (args) => {
    return (
        <>
            <Text {...args}>Custom text</Text>
        </>
    );
};
