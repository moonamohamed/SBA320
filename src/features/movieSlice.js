import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_KEY = import.meta.env.vite_OMDB_API_KEY;

export const fetchMovies = createAsyncThunk(
    'movie/fetchMovies',
    async (searchTerm) => {
        const res = await.get('https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}');
        return res.data.Search || [];
    }
);

