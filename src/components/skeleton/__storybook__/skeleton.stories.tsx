import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Skeleton, SkeletonProps} from '../skeleton';
// import {SkeletonShowcase} from './SkeletonShowcase';

export default {
    title: 'Components/Skeleton',
    component: Skeleton,
} as Meta;

const DefaultTemplate: Story<SkeletonProps> = (args) => {
    return (
        <>
            <div
                style={{
                    height: '20px',
                    backgroundColor: 'white',
                    position: 'relative',
                    margin: '20px',
                }}
            >
                <Skeleton {...args} />
            </div>
            <div
                style={{
                    height: '20px',
                    backgroundColor: 'white',
                    width: '80%',
                    position: 'relative',
                    margin: '20px',
                }}
            >
                <Skeleton {...args} />
            </div>
            <div
                style={{
                    height: '20px',
                    backgroundColor: 'white',
                    width: '50%',
                    position: 'relative',
                    margin: '20px',
                }}
            >
                <Skeleton {...args} />
            </div>
            <div
                style={{
                    height: '20px',
                    backgroundColor: 'white',
                    position: 'relative',
                    width: '60%',
                    margin: '20px',
                }}
            >
                <Skeleton {...args} />
            </div>
        </>
    );
};
export const Default = DefaultTemplate.bind({});
