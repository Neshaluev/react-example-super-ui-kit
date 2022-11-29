import {ComponentStory, Meta} from '@storybook/react';
import React from 'react';

// import {Input, InputProps} from '../input';
import {Input} from '../input';

// interface SBInput
//     extends Pick<InputProps, 'color' | 'value' | 'suffix' | 'prefix' | 'success' | 'error'> {
//     id?: string;
// }

export default {
    title: 'Components/Input',
    id: 'components/Input',
    component: Input,
    argTypes: {
        color: {
            options: ['base', 'primary', 'success', 'error'],
            control: {type: 'select'},
            defaultValue: 'primary',
        },

        value: {
            control: {type: 'text'},
            defaultValue: 'Default text',
        },
        suffix: {
            control: {type: 'text'},
            defaultValue: null,
        },
        prefix: {
            control: {type: 'text'},
            defaultValue: null,
        },
        success: {
            options: [undefined, 'true'],
            control: {type: 'radio'},
            defaultValue: undefined,
        },
        error: {
            control: {type: 'text'},
            defaultValue: null,
        },
    },
} as Meta;

export const Template: ComponentStory<typeof Input> = (args) => {
    return (
        <>
            <Input {...args} />
            <div style={{marginTop: '15px'}}></div>
            <Input suffix={'suffix'} value={'Value input'} />
            <div style={{marginTop: '15px'}}></div>
            <Input prefix={'prefix'} value={'Value input'} />
            <div style={{marginTop: '15px'}}></div>
            <Input activeSuccess={true} value="Success" />
            <div style={{marginTop: '15px'}}></div>
            <Input error={'Error message.'} value={'Error message'} />
        </>
    );
};
