import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer';
import colorReducer from './colorReducer';
import footerReducer from './footerReducer';


export default combineReducers({
    
    auth: authReducer,
    form: reduxForm,
    color: colorReducer,
    footer: footerReducer
    
});