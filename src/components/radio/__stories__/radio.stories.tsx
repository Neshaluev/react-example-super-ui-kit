import {Meta, Story} from '@storybook/react';
import * as React from 'react';
import {Radio, RadioProps} from '../radio';

export default {
    title: 'Components/Radio',
    component: Radio,

    argTypes: {
        children: {
            control: {type: 'text'},
            defaultValue: 'Button',
        },
        content: {
            control: {type: 'text'},
            defaultValue: 'content',
        },
        type: {
            options: ['outline', 'box_shadow'],
            control: {type: 'radio'},
            defaultValue: 'outline',
        },
        size: {
            options: ['s', 'm', 'l'],
            control: {type: 'radio'},
            defaultValue: 's',
        },
    },
} as Meta;

export const Template: Story<RadioProps> = (args) => {
    return (
        <>
            <Radio {...args} />
            <span style={{margin: '8px'}} />
            <Radio {...args} />
        </>
    );
};
