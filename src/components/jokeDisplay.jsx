import { useDispatch, useSelector } from 'react-redux';
import { fetchJoke } from '../features/jokesSlice';

export default function JokeDisplay() {
    const dispatch = useDispatch();
    const { joke, status } = useSelector((state) => state.joke);

    const handClick = () => {
        dispatch(fetchJoke());
    };

    return(
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1>Random Jokes</h1>
            <button onClick={handClick}>Tell Me a Joke</button>
            {status === 'loading' && <p>Loading...</p>}
            {joke && <p id='displayJoke' style={{ marginTop: '1rem' }}>{joke}</p>}
        </div>
    );
}