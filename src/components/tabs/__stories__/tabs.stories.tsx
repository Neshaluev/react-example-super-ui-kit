import {ComponentStory, Meta} from '@storybook/react';
import React from 'react';

import {Tabs} from '../tabs';

export default {
    title: 'Components/Tabs',
    id: 'components/Tabs',
    component: Tabs,
    argTypes: {
        content: {
            control: {type: 'text'},
            defaultValue: 'Tabs',
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

export const Template: ComponentStory<typeof Tabs> = (args) => {
    return (
        <>
            <Tabs
                {...args}
                items={[
                    {label: 'Tab 1', key: 'item-1', children: 'Content 1'},
                    {label: 'Tab 2', key: 'item-2', children: 'Content 2'},
                    {label: 'Tab 3', key: 'item-3', children: 'Content 3'},
                ]}
            />
        </>
    );
};
