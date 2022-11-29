import React from 'react';

import './docs_example.scss';

export interface DocsExampleProps {
    children: React.ReactNode;
    distribute?: 'start' | 'end' | 'center';
    gap?: 's' | 'm' | 'l';
    space?: 's' | 'm' | 'l';
    rounded?: boolean;
    background?: string;
}

export function DocsExample({
    children,
    // distribute = "start",
    // gap = "m",
    // space = "m",
    // rounded = true,
    background = 'var(--color-base-background)',
}: DocsExampleProps) {
    return (
        <div style={{background}}>
            {React.Children.map(children, (elem, i) => (
                <div key={i} className={'item'}>
                    {elem}
                </div>
            ))}
        </div>
    );
}
