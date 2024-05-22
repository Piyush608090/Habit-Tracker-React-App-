import { configureStore } from '@reduxjs/toolkit'
import {habitReducer} from "./reducer"
export const store = configureStore({
    reducer: {
        habitReducer
    },
})
