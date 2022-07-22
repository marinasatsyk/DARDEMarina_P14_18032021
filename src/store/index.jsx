import { configureStore } from '@reduxjs/toolkit';
import GetListReducer from '../constants/features/ListEmployeesSlice';

export const store = configureStore({
    reducer: {
        list: GetListReducer,
    },
});
