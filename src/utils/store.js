import { configureStore } from "@reduxjs/toolkit";
import {data} from '../data';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialState = {
    formIsValid: false,
    key: data.length,
    firstName : '',
    lastName : '',
    birthValue : '',
    startValue : '',
    street : '',
    city : '',
    state : '',
    zipCode : '',
    department : '',
}

export const isValidForm = () => ({ type: 'valid'})
export const isInvalidForm = () => ({ type: 'invalid'})
export const resetForm = () => ({ type: 'reset' })
export const keyEmployee = (key) => ({ 
    type: 'updateKey',
    payload: {key: key},
})

function reducer(state=initialState, action) {
    if (action.type === 'valid'){
        return {
            ...state,
            formIsValid: true,
            key: state.key + 10
        }
    }
    if (action.type === 'invalid'){
        return {
            ...state,
            formIsValid: false
        }
    }
    if (action.type === 'updateKey'){
        return {
            ...state,
            key: state.key + 1
        }
    }
    if(action.type === 'reset'){
        return initialState
    }
    return state
}

export const store = configureStore({
    reducer,
    reduxDevtools
});