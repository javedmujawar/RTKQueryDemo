import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { stateListApi } from '../services/statelist'


export const store = configureStore({
    reducer:{
        [stateListApi.reducerPath]: stateListApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stateListApi.middleware),
});

setupListeners(store.dispatch)