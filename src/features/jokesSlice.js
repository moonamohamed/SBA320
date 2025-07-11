import { createSlice.js, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJoke = createAsync('joke/fetchJoke', async () => {
    const response = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
    const data = await response.json();
    return data.joke;
});

const jokeSlice = createSlice({
    name: 'joke',
    initialState: {
        joke: '',
        status: 'idle',
    },
})