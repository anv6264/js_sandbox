import {createStore, combineReducers, applyMiddleware} from 'redux';
import studentsReducer from './reducers/students';
import counterReducer from './reducers/counter';
import loggerMiddleware from './middlewares/logger';
import countUpdaterMiddleware from './middlewares/count_updater';
import storageMiddleware from './middlewares/storage';
import deduplicator from './middlewares/deduplicator';


export const Store = createStore(
    combineReducers({
        students: studentsReducer,
        counter: counterReducer,
}),
    applyMiddleware(
        loggerMiddleware, 
        countUpdaterMiddleware, 
        storageMiddleware,
        deduplicator)
);






