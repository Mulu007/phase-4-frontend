import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/loginSlice"


export default configureStore({
    reducer: {
        user: userReducer,
    }
})