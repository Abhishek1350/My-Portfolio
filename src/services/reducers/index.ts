import { combineReducers } from 'redux';
import personalDetails from './personalDetails';

export const rootReducer = combineReducers({
    personalDetails: personalDetails,
});
