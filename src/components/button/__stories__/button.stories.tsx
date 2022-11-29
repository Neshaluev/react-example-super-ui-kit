import {ComponentStory, Meta} from '@storybook/react';
import React from 'react';

import Docs from './button.docs.mdx';

import {Button} from '..';
import {Settings} from '../../icons';

export default {
    title: 'Components/Button',
    id: 'components/Button',
    component: Button,
    argTypes: {
        children: {
            control: {type: 'text'},
            defaultValue: 'Button',
        },
        color: {
            options: ['base', 'primary', 'success', 'error'],
            control: {type: 'select'},
            defaultValue: 'primary',
        },
        rounded: {
            options: [undefined, 'true'],
            control: {type: 'radio'},
            defaultValue: true,
        },
        outline: {
            options: [undefined, 'true'],
            control: {type: 'radio'},
            defaultValue: undefined,
        },
        width: {
            options: [undefined, 'auto', 'max'],
            control: {type: 'radio'},
            defaultValue: undefined,
        },
        onlyIcon: {defaultValue: undefined, control: {type: 'radio'}, options: [undefined, 'true']},
    },
    parameters: {
        docs: {
            page: Docs,
        },
    },
} as Meta;

export const Template: ComponentStory<typeof Button> = (args) => {
    return (
        <>
            <Button {...args}>{args.children}</Button>
            <div style={{marginTop: '15px'}}></div>
            <Button {...args} color="primary">
                {args.children}
            </Button>
            <div style={{marginTop: '15px'}}></div>
            <Button {...args} color="success">
                {args.children}
            </Button>
            <div style={{marginTop: '15px'}}></div>
            <Button {...args} color="base">
                {args.children}
            </Button>
            <div style={{marginTop: '15px'}}></div>
            <Button {...args} color="error" full>
                {args.children}
            </Button>
            <div style={{marginTop: '15px'}}></div>
            <Button {...args} disabled>
                {args.children}
            </Button>
        </>
    );
};
export const Icon: ComponentStory<typeof Button> = (args) => {
    return (
        <>
            <Button {...args} color="primary" icon={<Settings />}>
                {args.children}
            </Button>
            <div style={{marginTop: '15px'}}></div>
            <Button {...args} color="error" icon={<Settings />} onlyIcon={true}>
                {args.children}
            </Button>
            <div style={{marginTop: '15px'}}></div>
            <Button {...args} color="error" isLoading onlyIcon></Button>
            <div style={{marginTop: '15px'}}></div>
            <Button {...args} color="error" isLoading>
                Text button
            </Button>
        </>
    );
};
// export const Accent: ComponentStory<typeof Button> = (args) => {
//     return (
//         <>
//             <Button {...args} color="accent">
//                 {args.children}
//             </Button>
//         </>
//     );
// };
// export const Accent: ComponentStory<typeof Button> = (args) => {
//     return (
//         <>
//             <Button {...args} color="accent">
//                 {args.children}
//             </Button>
//         </>
//     );
// };
