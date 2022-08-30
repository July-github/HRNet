import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    data: null,
    formIsValid: false
}

const { actions, reducer } = createSlice ({
    name: 'form',
    initialState,
    reducers: {
        submit:{
            prepare: (data, id) => ({ payload:{data, id} }),
            reducer: (draft, action) => {
                draft.data = action.payload.data
                draft.data.id = action.payload.id
            }
        },
        valid:{
            reducer: (draft, action) => { draft.formIsValid = true}
        },
        unvalid:{
            reducer: (draft, action) => { draft.formIsValid = false}
        },
        reset:{
            reducer: () => { return initialState }
        }
    }
})

export {actions}
export default reducer