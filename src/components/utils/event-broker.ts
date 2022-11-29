import React from 'react';

export interface EventBrokerData<T = unknown> {
    componentId: string;
    eventId: string;
    meta?: T;
    domEvent?: React.SyntheticEvent;
}

export type EventBrokerSubscription = (data: EventBrokerData) => void;

export class EventBroker {
    subscriptions: EventBrokerSubscription[] = [];
    componentPrefix?: string;

    constructor(prefix?: string) {
        this.componentPrefix = prefix;
    }

    subscribe(subscription: EventBrokerSubscription) {
        this.subscriptions.push(subscription);
    }

    unsubscribe(subscription: EventBrokerSubscription) {
        const index = this.subscriptions.indexOf(subscription);

        if (index > -1) {
            this.subscriptions.splice(index, 1);
        }
    }

    publish({componentId, ...restData}: EventBrokerData) {
        this.subscriptions.forEach((fn) =>
            fn({
                ...restData,
                componentId: this.componentPrefix
                    ? `${this.componentPrefix}${componentId}`
                    : componentId,
            }),
        );
    }

    withEventPublisher(componentId: string) {
        return (eventBrokerData: Omit<EventBrokerData, 'componentId'>) => {
            this.publish({
                ...eventBrokerData,
                componentId,
            });
        };
    }
}

export const eventBroker = new EventBroker();
