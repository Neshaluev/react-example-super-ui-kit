import React, {HTMLAttributes} from 'react';
import clsx from 'clsx';

import './skeleton.scss';

export type SkeletonProps = Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;

export function Skeleton({className, style}: SkeletonProps) {
    return <div className={clsx('skeleton', className)} style={style} />;
}
