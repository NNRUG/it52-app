import {getEvents} from '../../api';
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';

// Constants
const FETCH_REQUEST = 'it52-app/events/fetch/request';
const FETCH_SUCCESS = 'it52-app/events/fetch/success';
const FETCH_FAILURE = 'it52-app/events/fetch/failure';
export const SELECT_AND_TRANSITION = 'it52-app/events/fetch/select-and-transition';

// Action creators
export function fetchEvents() {return  {type: FETCH_REQUEST}}
export function selectEvent(data) {return  {type: SELECT_AND_TRANSITION, data}}

// Sagas
function* fetchEventsSaga() {
    try {
        let {events, status} = yield call(getEvents);
        if(status == 200) {
            yield put({type: FETCH_SUCCESS, data: events});
        } else {
            yield put({type: FETCH_FAILURE});
        }
    } catch(e) {
        console.warn(e);       
    }
}

export function* eventsSagas() {
    yield* takeLatest(FETCH_REQUEST, fetchEventsSaga);
}

const initialState = {
    events: [],
    loading: false,
    error: false,
    selectedId: 0 
};

// Reducer
export default function events(state = initialState, action) {
    switch(action.type) {
        case FETCH_REQUEST:         return {...state, loading: true,  error: false};
        case FETCH_SUCCESS:         return {...state, loading: false, events: action.data};
        case FETCH_FAILURE:         return {...state, loading: false, error: true};
        case SELECT_AND_TRANSITION: return {...state, selectedId: action.data};
        default: return state;
    }
}
