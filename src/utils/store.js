import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../redux/reducer";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
    reduxDevtools
});