import { createSlice } from '@reduxjs/toolkit'
import { datas } from '../data'

const initialState ={
    dataEmployees: datas,
    formIsValid: false
}

const { actions, reducer } = createSlice ({
    name: 'form',
    initialState,
    reducers: {
        submit:{
            prepare: (data) => ({ payload:{data} }),
            reducer: (draft, action) => {
                draft.dataEmployees = action.payload
                return;
            }
        },
        addEmployee:{
            prepare: (data, allEmployees) => ({ payload:{data, allEmployees} }),
            reducer: (draft, action) => {
                draft.dataEmployees = [...action.payload.allEmployees, action.payload.data]
                return;
            }
        },
        valid:{
            reducer: (draft, action) => { 
                draft.formIsValid = true
            return;
            }
        },
        unvalid:{
            reducer: (draft, action) => { 
                draft.formIsValid = false
            return;
            }
        },
        reset:{
            reducer: () => { return initialState }
        }
    }
})

export {actions}
export default reducer