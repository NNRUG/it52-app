import update from 'react-addons-update';
import * as NavigationStateUtils from 'NavigationStateUtils';
import {SELECT_AND_TRANSITION} from './events';

// Constants
const PUSH =  'it52-app/navigation/push';
const POP =   'it52-app/navigation/pop';
const RESET = 'it52-app/navigation/reset';

// Action creators
export function push(data) {return {type: PUSH, data}}
export function pop(data)  {return {type: POP, data}}
export function reset(data) {return {type: RESET, data}}

function setKey(scene) {
    return update(scene, {$merge: {key: scene.type + Date.now()}});
}

const initialState = {
    index: 0,
    routes: [
        setKey({type: 'eventList'})
    ]
};

export default function navigation(state = initialState, action) {
    switch (action.type) {
        case PUSH:
            return NavigationStateUtils.push(state, setKey(action.data));
        case POP:
            return NavigationStateUtils.pop(state);
        case RESET:
            return action.data;
        case SELECT_AND_TRANSITION: 
            return NavigationStateUtils.push(state, setKey({type: 'event'}));
        default:
            return state;
    }
}