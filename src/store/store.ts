import { configureStore } from '@reduxjs/toolkit';
import tvmazeReducer from './tvmaze/tvmaze.slice';

export const store = configureStore({
    reducer: {
        shanel: tvmazeReducer,
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;