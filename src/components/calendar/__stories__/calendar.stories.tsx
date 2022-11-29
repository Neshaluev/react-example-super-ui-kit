import {ComponentStory, Meta} from '@storybook/react';
import React from 'react';

import {Calendar} from '../cateldar';

export default {
    title: 'Components/Calendar',
    id: 'components/Calendar',
    component: Calendar,
} as Meta;

export const Template: ComponentStory<typeof Calendar> = (args) => {
    return (
        <>
            <Calendar {...args} />
        </>
    );
};
