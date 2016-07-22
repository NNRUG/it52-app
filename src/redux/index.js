import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import navigation from './modules/navigation';
import events, {eventsSagas} from './modules/events';

const reducers  = combineReducers({
    navigation, 
    events
});

const logger = createLogger();
const saga = createSagaMiddleware();

const store = __DEV__ ?
    createStore(reducers, applyMiddleware(saga, logger)) :
    createStore(reducers, applyMiddleware(saga));

saga.run(eventsSagas);

export default store;
