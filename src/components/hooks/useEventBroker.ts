import {useEffect} from 'react';
import {eventBroker, EventBrokerSubscription} from '../utils/event-broker';

export function useEventBroker(subscription: EventBrokerSubscription, broker = eventBroker) {
    useEffect(() => {
        broker.subscribe(subscription);
        return () => broker.unsubscribe(subscription);
    }, [broker, subscription]);
}
