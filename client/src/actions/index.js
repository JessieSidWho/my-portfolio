import { FETCH_USER } from './types';
import { COLOR_CHANGE } from './types';
import { FOOTER_COLOR } from './types';
import axios from  'axios';

export const fetchUser = () =>  async dispatch => {
    const res = await axios.get('/api/currentUser');
    dispatch({ type: FETCH_USER, payload: res.data});
}

export const colorChange = (color) => async dispatch => {
    dispatch({ type: COLOR_CHANGE, payload: color});
}

export const footerColor = (footer) => async dispatch => {
    dispatch({ type: FOOTER_COLOR, payload: footer});
}