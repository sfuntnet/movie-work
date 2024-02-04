import {createSlice} from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'Movies',
    initialState: {
        data: [],
        loading: true,
        hiddenMovies: 'block',
    },
    reducers: {
        movies(state, action) {
            state.data = action.payload
        },
        loadingChange(state, action) {
            state.loading = action.payload
        },
        moviesHidden(state, action) {
            state.hiddenMovies = action.payload
        }
    },
});
export const {movies, loadingChange,moviesHidden} = movieSlice.actions;