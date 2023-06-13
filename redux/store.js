import { configureStore } from "@reduxjs/toolkit";
import { authReducer, messageReducer } from "./reducers";


const store = configureStore({
    reducer:{
        auth :authReducer,
        message:messageReducer
    }
})

export default store