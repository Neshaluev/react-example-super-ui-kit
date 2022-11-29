import {ComponentStory, Meta} from '@storybook/react';
import React from 'react';

import {Select} from '../select';

export default {
    title: 'Components/Select',
    id: 'components/Select',
    component: Select,
    argTypes: {
        // content: {
        //     control: {type: 'text'},
        //     defaultValue: 'Select',
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
        // width: {
        //     options: [undefined, 'auto', 'max'],
        //     control: {type: 'radio'},
        //     defaultValue: undefined,
        // },
    },
} as Meta;

export const Template: ComponentStory<typeof Select> = (args) => {
    return (
        <>
            <Select {...args} />
        </>
    );
};
