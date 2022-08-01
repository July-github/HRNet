import { actions } from './reducer'
import { selectEmployees } from '../redux/selector'

export function resetForm(){
    return (dispatch, getState) => {
        dispatch(actions.reset())
    }
}

export function validForm(){
    return(dispatch, getState)=> {
        dispatch(actions.valid())
        console.log('valid')
    }
}

export function unvalidForm(){
    return(dispatch, getState)=> {
        dispatch(actions.unvalid())
        console.log('unvalid')
    }
}

export function checkValid(){
    return (dispatch, getState) => {
        const formValid = selectEmployees(getState()).formIsValid
        console.log('formValid')
        return formValid
    }
}

export function submitForm(data){
    return (dispatch, getState) => {
        const validation = dispatch(checkValid())
        console.log(validation)
        if(validation){
            const dataReceived = JSON.parse(localStorage.getItem('Array of employees'))
            const id = dataReceived.length + 1
            dispatch(actions.submit(data, id))
            return true
        }else{
            return false
        }
    }
}