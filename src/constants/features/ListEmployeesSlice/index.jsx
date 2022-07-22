import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    listEmployees: [],
    isLoading: false,
    error: '',
};
const ListEmployeesSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        getListPending: (state) => {
            state.isLoading = true;
        },
        stopListPending: (state) => {
            state.isLoading = false;
        },
        getListSuccess: (state, { payload }) => {
            console.log(payload);
            state.isLoading = false;
            const newAr = state.listEmployees.concat(payload);
            state.listEmployees = newAr;
            state.error = '';
        },
        getListFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export const { getListPending, stopListPending, getListSuccess, getListFail } =
    ListEmployeesSlice.actions;
export default ListEmployeesSlice.reducer;
