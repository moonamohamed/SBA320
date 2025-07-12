import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../features/jokesSlice';
import { useEffect } from 'react';

export default function JokeDisplay() {
    const dispatch = useDispatch();
    const { joke, status } = useSelector((state) => state.joke);

    useEffect(() => {
        dispatch(fetchJoke());
    }, [dispatch]);

    return(
        <div style={{ textAlign: 'center', marginTop: '2rem', color:'white'}}>
            <h1>Random Jokes</h1>
            <button onClick={() => dispatch(fetchJoke())}>Tell Me a Joke</button>
            {status === 'loading' && <p>Loading...</p>}
            {joke && <p id='displayJoke' style={{ marginTop: '1rem' }}>{joke}</p>}
        </div>
    );
}

