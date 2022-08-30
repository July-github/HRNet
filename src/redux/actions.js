import { actions } from './reducer'
import { selectEmployees } from '../redux/selector'
import { datas } from '../data'

export function resetForm(){
    return (dispatch, getState) => {
        dispatch(actions.reset())
    }
}

export function validForm(){
    return(dispatch, getState)=> {
        dispatch(actions.valid())
    }
}

export function unvalidForm(){
    return(dispatch, getState)=> {
        dispatch(actions.unvalid())
    }
}

export function checkValid(){
    return (dispatch, getState) => {
        const formValid = selectEmployees(getState()).formIsValid
        return formValid
    }
}

export function submitForm(data){
    return (dispatch, getState) => {
        const id = datas.length + 1
        const newData = dispatch(actions.submit(data, id))
        datas.push(newData.payload.data)
    }
}