import {ComponentStory, Meta} from '@storybook/react';
import React from 'react';

import {Switch} from '../switch';

export default {
    title: 'Components/Switch',
    id: 'components/Switch',
    component: Switch,
    argTypes: {
        // content: {
        //     control: {type: 'text'},
        //     defaultValue: 'Switch',
        // },
        // color: {
        //     options: ['base', 'primary', 'success', 'error'],
        //     control: {type: 'select'},
        //     defaultValue: 'primary',
        // },
        // size: {
        //     options: ['s', 'm', 'l'],
        //     control: {type: 'radio'},
        //     defaultValue: 'm',
        // },
        // value: {
        //     control: {type: 'value'},
        //     defaultValue: 'test input',
        // },
        // width: {
        //     options: [undefined, 'auto', 'max'],
        //     control: {type: 'radio'},
        //     defaultValue: undefined,
        // },
    },
} as Meta;

export const Template: ComponentStory<typeof Switch> = (args) => {
    return (
        <>
            <Switch {...args} />
        </>
    );
};
