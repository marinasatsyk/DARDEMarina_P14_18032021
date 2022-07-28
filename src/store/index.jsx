import { configureStore } from '@reduxjs/toolkit';
import GetListReducer from '../constants/features/ListEmployeesSlice';

/**
 * store of the application
 */
export const store = configureStore({
    reducer: {
        list: GetListReducer,
    },
});
