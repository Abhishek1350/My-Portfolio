import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    loading: false,
    error: null
};

const personalDetailsSlice = createSlice({
    name: 'personalDetails',
    initialState,
    reducers: {
        fetchDetails: state => {
            state.loading = true;
        },
        fetchDetailsSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchDetailsError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchDetails, fetchDetailsSuccess, fetchDetailsError } = personalDetailsSlice.actions;

export default personalDetailsSlice.reducer;