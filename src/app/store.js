import { configureStore } from '@reduxjs/toolkit';
import jokesReducer from '../features/jokesSliceSlice';

export const store = configureStore({
    reducer: {
        joke: jokesReducer,
    },
});