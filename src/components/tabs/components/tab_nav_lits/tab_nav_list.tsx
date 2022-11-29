import React, {useContext} from 'react';
import {TabContext} from '../../tab_context';
import TabNavItem from './tab_nav_item/tab_nav_item';

import './tab_nav_list.scss';

interface TabNavListProps {
    activeTab?: string;
    handleActiveTab: (...args: any) => void;
}

export const TabNavList = ({activeTab, handleActiveTab}: TabNavListProps) => {
    const {tabs} = useContext(TabContext);

    return (
        <div className="tab_nav__list">
            {tabs.map(({key, ...restTabProps}) => {
                const active = activeTab === key;
                return (
                    <TabNavItem
                        key={key}
                        active={active}
                        {...restTabProps}
                        onClick={() => handleActiveTab(key)}
                    />
                );
            })}
        </div>
    );
};

export default TabNavList;
