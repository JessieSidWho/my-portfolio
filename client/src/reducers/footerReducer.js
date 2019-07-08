import { FOOTER_COLOR } from './../actions/types';

export default function(state = 'bg-light text-dark border-dark', action){
    switch(action.type) {
        case FOOTER_COLOR:
            return action.payload || false;
        default:
            return state
    }
}